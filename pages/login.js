import { useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()

  const { signInWithEmailAndPassword } = useAuth()

  const onSubmit = (e) => {
    console.log(email, password)
    setError(null)
    
    signInWithEmailAndPassword(email, password)
    .then((authUser) => {
      console.log('AUTH USER', authUser)
      router.push('/home')
    })
    .catch((error) => {
      setError(error.message)
    })
    e.preventDefault()
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      {error && <p className='py-6 text-4xl text-red-600'>{error}</p>}
      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <h1 className='text-7xl'>Log In Page</h1>
        <div className='flex py-10'>
          <form
            onSubmit={onSubmit}
            className='flex flex-col border border-gray-300 rounded w-96 text-left'
          >
            <div className='flex flex-col justify-center p-4 w-full space-y-2'>
              <label htmlFor='email'>Email</label>
              <input
                className='border rounded-sm'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name='email'
                type='email'
              />
            </div>
            <div className='flex flex-col justify-center p-4 w-full space-y-2'>
              <label htmlFor='password1'>Password</label>
              <input
                className='border rounded-sm'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
              />
            </div>
            <div className='flex flex-col p-4 w-full space-y-2'>
              <button className='bg-gray-800 text-white py-2 px-4 rounded-md'>
                Log In
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
