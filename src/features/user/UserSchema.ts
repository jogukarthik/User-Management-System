// validation/userSchema.ts
import { z } from 'zod';

export const userSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Username is required')
      .max(20, 'Username must be at most 20 characters'),
    email: z.string().min(1, 'Email is required').email('Invalid email format'),

    password: z.string().min(8, 'Password must be at least 8 characters'),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
