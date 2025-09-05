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

export interface ValidationError {
  field: string;
  message: string;
}

// Enhanced email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

// Enhanced password validation
function isValidPassword(password: string): {valid: boolean, errors: string[]} {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/(?=.*\d)/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

// Validate signup data
export function validateSignupData(data: SignupData): ValidationError[] {
  const errors: ValidationError[] = [];

  // First name validation
  if (!data.firstName?.trim()) {
    errors.push({ field: 'firstName', message: 'First name is required' });
  } else if (data.firstName.trim().length < 2) {
    errors.push({ field: 'firstName', message: 'First name must be at least 2 characters' });
  } else if (data.firstName.trim().length > 50) {
    errors.push({ field: 'firstName', message: 'First name cannot exceed 50 characters' });
  }

  // Last name validation
  if (!data.lastName?.trim()) {
    errors.push({ field: 'lastName', message: 'Last name is required' });
  } else if (data.lastName.trim().length < 2) {
    errors.push({ field: 'lastName', message: 'Last name must be at least 2 characters' });
  } else if (data.lastName.trim().length > 50) {
    errors.push({ field: 'lastName', message: 'Last name cannot exceed 50 characters' });
  }

  // Email validation
  if (!data.email?.trim()) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!isValidEmail(data.email.trim())) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  // Password validation
  if (!data.password) {
    errors.push({ field: 'password', message: 'Password is required' });
  } else {
    const passwordValidation = isValidPassword(data.password);
    if (!passwordValidation.valid) {
      passwordValidation.errors.forEach(error => {
        errors.push({ field: 'password', message: error });
      });
    }
  }

  // Confirm password validation
  if (data.password !== data.confirmPassword) {
    errors.push({ field: 'confirmPassword', message: 'Passwords do not match' });
  }

  return errors;
}

// Validate login data
export function validateLoginData(data: LoginData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.email?.trim()) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!isValidEmail(data.email.trim())) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  if (!data.password) {
    errors.push({ field: 'password', message: 'Password is required' });
  }

  return errors;
}
