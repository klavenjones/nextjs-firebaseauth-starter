import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context'

export default function LoggedIn() {
  const { authUser, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !authUser) {
      router.push('/login')
    }
    console.log('Auth User', authUser)
  }, [authUser, loading])

  return (
    <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
      <h1 className='text-7xl'>Logged In</h1>
      <div className='flex py-10'>
        <Link href='/home'>
          <a className='text-5xl'>Logged In</a>
        </Link>
      </div>
    </main>
  )
}
