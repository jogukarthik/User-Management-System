import React from 'react'
import { useForm } from 'react-hook-form';
export const UserPage = () => {
    type FormValues={
        name:string,
        email:string,
        password:string
    }
    const onSubmit=(data:FormValues)=>{
        console.log(data);
        reset();
    }
    const {register,handleSubmit,formState,reset}=useForm<FormValues>();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' {...register('name',{
            required:'Name is required'
        })}/>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' {...register('email',{
            required:'Email is required',
            pattern:{
                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message:'Invalid email address'
            }
        })}/>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' {...register('password',{
            required:'Password is required',
            minLength:{
                value:6,
                message:'Password must be at least 6 characters'
            }
        })}/>
        <button type='submit'>Submit</button>
    </form>
  )
}
