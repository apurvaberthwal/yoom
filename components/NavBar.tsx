import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import MobileNav from './MobileNav'
const NavBar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:pz-10'>
        
        <Link href="/" className= "flex items-center gap-1" >
        
        <Image src="/icons/logo.svg" 
        width={32} height={32}
        alt='logo' className='max-sm:size-10'/>
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Yoom</p>
        </Link>
        <div className="flex-between gap-5 ">

        <SignedIn>
              <UserButton />
        </SignedIn>
    
        <MobileNav />

        </div>
        
        </nav>
  )
}

export default NavBar

//#45:41