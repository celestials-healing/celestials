// lib/api-client.ts
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  user?: T;
  token?: string;
  errors?: Array<{ field: string; message: string }>;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  subscribeNewsletter: boolean;
}

export interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  isVerified: boolean;
}

class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}/api${endpoint}`;

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      credentials: 'include',
      ...options,
    };

    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth-token');
      if (token) {
        config.headers = {
          ...(config.headers as Record<string, string>),
          Authorization: `Bearer ${token}`,
        };
      }
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (data.token && typeof window !== 'undefined') {
        localStorage.setItem('auth-token', data.token);
      }

      return {
        success: data.success,
        message: data.message,
        user: data.user as T | undefined,
        token: data.token,
        errors: data.errors,
      };
    } catch (error) {
      console.error('API Client Error:', error);
      return {
        success: false,
        message: 'Network error occurred',
        errors: [{ field: 'network', message: 'Failed to connect to server' }],
      };
    }
  }

  // If your API returns the created user, keep ApiResponse<User>. If not, change to ApiResponse<null>.
  async signup(data: SignupData): Promise<ApiResponse<User>> {
    return this.request<User>('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Most auth APIs return { user, token }
  async login(data: LoginData): Promise<ApiResponse<User>> {
    return this.request<User>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async logout(): Promise<ApiResponse<null>> {
    const response = await this.request<null>('/auth/logout', { method: 'POST' });

    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth-token');
    }
    return response;
  }

  async getCurrentUser(): Promise<ApiResponse<User>> {
    return this.request<User>('/auth/me');
  }

  async refreshToken(): Promise<ApiResponse<User>> {
    return this.request<User>('/auth/refresh', { method: 'POST' });
  }

  isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('auth-token');
  }

  clearAuth(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth-token');
    }
  }
}

export const apiClient = new ApiClient();
