import Link from 'next/link'
import { HeaderWrapper } from './Style'
import Image from 'next/image'

function Header() {

  return (
    <HeaderWrapper>
      <Image src="/logo.svg" alt="wetbat logo" width={300} height={120} />
      <div>
        <Link href="/" className="nav-btn">
          New Quote
        </Link>
        <Link href="/quotes-list" className="nav-btn">
          Quotes List
        </Link>
      </div>
    </HeaderWrapper>
  )
}

export default Header
