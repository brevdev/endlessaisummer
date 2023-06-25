import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto text-slate-900" />
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Probably March, perhaps February {new Date().getFullYear()} | Brought
          to you by <a>Brev.dev</a> and <a>CELO</a>
        </p>
      </Container>
    </footer>
  )
}
