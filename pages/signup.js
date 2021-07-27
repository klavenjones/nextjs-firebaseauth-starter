import { useState } from 'react'
import { useRouter } from 'next/router'

export default function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <h1 className='text-7xl'>Sign Up Page</h1>
        <div className='flex py-10'>
          <form className='flex flex-col border border-gray-300 rounded w-96 text-left'>
            <div className='flex flex-col justify-center p-4 w-full space-y-2'>
              <label htmlFor='email'>Email</label>
              <input className='border rounded-sm' name='email' type='text' />
            </div>
            <div className='flex flex-col justify-center p-4 w-full space-y-2'>
              <label htmlFor='password1'>Password</label>
              <input
                className='border rounded-sm'
                name='password1'
                type='text'
              />
            </div>
            <div className='flex flex-col justify-center p-4 w-full space-y-2'>
              <label htmlFor='email'>Confirm Password</label>
              <input className='border rounded-sm' name='email' type='text' />
            </div>
            <div className='flex flex-col p-4 w-full space-y-2'>
              <button className='bg-gray-800 text-white py-2 px-4 rounded-md'>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
