import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context'

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const { authUser, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && authUser) {
      router.push('/home')
    }
  }, [authUser, loading])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <h1 className='text-7xl'>Home Page not logged in</h1>
        <div className='flex py-10'>
          <Link href='/home'>
            <a className='text-5xl'>Dashboard</a>
          </Link>
        </div>
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
        </a>
      </footer>
    </div>
  )
}
