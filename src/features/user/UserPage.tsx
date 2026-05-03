import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../app/hooks';
import { setUser } from './UserSlice';
import { useAppSelector } from '../../app/hooks';
import { userSchema } from './UserSchema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
export const UserPage = () => {
  type FormValues = z.infer<typeof userSchema>;
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.data);
  const onSubmit = (data: FormValues) => {
    console.log(data);
    dispatch(setUser(data));
  };
  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      password: '',
    },
  });
  const { errors } = formState;
  // Update form fields when Redux data changes
  useEffect(() => {
    if (user?.name || user?.email) {
      reset({
        name: user.name,
        email: user.email,
        password: '',
      });
    }
  }, [user, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" {...register('name')} />
      <p style={{ color: 'red' }}>{errors.name?.message}</p>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" {...register('email')} />
      <p style={{ color: 'red' }}>{errors.email?.message}</p>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" {...register('password')} />
      <p style={{ color: 'red' }}>{errors.password?.message}</p>
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm Password"
        {...register('confirmPassword')}
      />
      <p style={{ color: 'red' }}>{errors.confirmPassword?.message}</p>
      <button type="submit">Submit</button>
    </form>
  );
};
