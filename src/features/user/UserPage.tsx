import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../app/hooks';
import { addUser } from './UserSlice';
import { userSchema } from './UserSchema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
export const UserPage = () => {
  type FormValues = z.infer<typeof userSchema>;
  const dispatch = useAppDispatch();
  //const user = useAppSelector((state) => state.user.users);
  const onSubmit = (data: FormValues) => {
    console.log(data);
    dispatch(addUser(data)); //-------------------need to change this for users array
    localStorage.removeItem('formDraft');
    reset({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };
  const { register, handleSubmit, formState, reset, watch } =
    useForm<FormValues>({
      resolver: zodResolver(userSchema),
    });
  const { errors } = formState;
  // Update form fields when Redux data changes
  useEffect(() => {
    const saved = localStorage.getItem('formDraft');
    if (saved) {
      reset(JSON.parse(saved));
    }
  }, [reset]);

  // 👇 Save on every change
  useEffect(() => {
    const sub = watch((value) => {
      localStorage.setItem('formDraft', JSON.stringify(value));
    });

    return () => sub.unsubscribe();
  }, [watch]);

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
