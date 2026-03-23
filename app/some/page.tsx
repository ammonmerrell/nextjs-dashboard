import type { Route } from 'next'
import Link from 'next/link'

export default function Page() {
  return <Link href={'/proxy-redirect' as Route}>Link Text</Link>
}

function Card<T extends string>({ href }: { href: Route<T> | URL }) {
  return (
    <Link href={href}>
      <div>My Card</div>
    </Link>
  )
}