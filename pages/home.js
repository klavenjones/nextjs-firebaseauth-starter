import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context'

export default function LoggedIn() {
  const { authUser, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !authUser) {
      router.push('/')
    }
  }, [authUser, loading])

  return <div>Home</div>
}
