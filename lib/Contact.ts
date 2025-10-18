// lib/validation.ts (add to your existing validation file)

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export function validateContactData(data: ContactData): Array<{ field: string; message: string }> {
  const errors: Array<{ field: string; message: string }> = [];

  // Validate name
  if (!data.name || !data.name.trim()) {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  } else if (data.name.trim().length > 100) {
    errors.push({ field: 'name', message: 'Name cannot exceed 100 characters' });
  }

  // Validate email
  if (!data.email || !data.email.trim()) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.push({ field: 'email', message: 'Please provide a valid email address' });
    }
  }

  // Validate message
  if (!data.message || !data.message.trim()) {
    errors.push({ field: 'message', message: 'Message is required' });
  } else if (data.message.trim().length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
  } else if (data.message.trim().length > 2000) {
    errors.push({ field: 'message', message: 'Message cannot exceed 2000 characters' });
  }

  return errors;
}