import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <>
      <main>
        <button type="button" onClick={() => router.push('/login')}> Click to login</button>
      </main>
    </>
  )
}
