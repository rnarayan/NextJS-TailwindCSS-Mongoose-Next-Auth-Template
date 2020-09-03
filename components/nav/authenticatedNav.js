import Link from 'next/link'
import { signout, useSession } from "next-auth/client"
import { Transition } from '@tailwindui/react'
import { useState } from 'react'
import AccessDenied from '../accessdenied'

const links = [
  { href: "/", label: "Product" },
  { href: "/", label: "Features" },
  { href: "/", label: "Home" },
  { href: "/new", label: "Add Pet" },
]

const profileLinks = [
  { href: "/new", label: "Your Profile" },
  { href: "/", label: "Settings" },
]

export default function AuthenticatedNav() {
  const [session, loading] = useSession()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  console.log('Authenticated Session:', session)
 
  if (loading) return null
  if (!loading && !session) return <AccessDenied/>

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center px-2 lg:px-0">
            <Logo />
            <NavbarLinks />
          </div>
          <Search />
          <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex lg:hidden" >
            <Hamburger />
          </div>
          <div className="hidden lg:block lg:ml-4">
            <div className="flex items-center">
              <NotificationIcon />
              {/* <!-- Profile dropdown from Navbar--> */}
              <div onClick={() => setIsOpen(!isOpen)} className="ml-4 relative flex-shrink-0">
                <button className="flex text-sm rounded-full text-white focus:outline-none focus:shadow-solid transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
                  <img className="h-8 w-8 rounded-full" src={session && session.user.image} alt="" />
                </button>

                <Transition show={isOpen}
                  enter="transition ease-out duration-100 transform"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-75 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95" >
                  {ref => <div ref={ref} className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                    <ProfileLinks session={session} />
                  </div>}
                </Transition>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`} >
        <MobileMenu session={session} />
      </div>
    </nav>
  )
}

// Mobile menu, toggle classNames based on menu state. Menu open: "block", Menu closed: "hidden" className="hidden lg:hidden" 
const MobileMenu = ({ session }) => (
  <>
    <MobileMenuLinks />
    <div className="pt-4 pb-3 border-t border-gray-700">
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src={session && session.user.image} alt=" /" />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium leading-6 text-white">Tom Cook</div>
          <div className="text-sm font-medium leading-5 text-gray-400">tom@example.com</div>
        </div>
      </div>
      <div className="mt-3 px-2">
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Your Profile</a>
        <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Settings</a>
        {session && (
          <a href={`/api/auth/signout`}
            // onClick={(e) => { e.preventDefault(); signout() }}
            onClick={e => signout()}
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          > Sign out</a>
        )}
      </div>
    </div>
  </>
)

const NavbarLinks = () => (
  <div className="hidden lg:block lg:ml-6">
    <div className="flex">
      {links.map(({ href, label }) => (
        <Link href={href} key={`${href}${label}`}>
          <a className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" >
            {label}
          </a>
        </Link>
      ))}
    </div>
  </div>
)

const ProfileLinks = (session) => (
  <ProfileLinksCSSWrap>
    {profileLinks.map(({ href, label }) => (
      <Link href={href} key={`${href}${label}`}>
        <a className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">
          {label}
        </a>
      </Link>
    ))}
    {session && (
      <a href={`/api/auth/signout`}
        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem"
        // onClick={(e) => { e.preventDefault();signout()}}
        onClick={e => signout()}
      > Sign out</a>)}
  </ProfileLinksCSSWrap>
)

const ProfileLinksCSSWrap = ({ children }) => (
  <div className="rounded-md bg-white shadow-xs">
    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
      <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
        {children}
      </div>
    </div>
  </div>
)

const Search = () => (
  <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
    <div className="max-w-lg w-full lg:max-w-xs">
      <label htmlFor="search" className="sr-only">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
        <input id="search" className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="Search" type="search" />
      </div>
    </div>
  </div>
)


const Logo = () => (
  <div className="flex-shrink-0">
    <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg" alt="Workflow logo" />
    <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg" alt="Workflow logo" />
  </div>
)

const MobileMenuLinks = () => (
  <div className="px-2 pt-2 pb-3">
    {links.map(({ href, label }) => (
      <Link href={href} key={`${href}${label}`}>
        <a
          className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" role="menuitem">
          {label}
        </a>
      </Link>
    ))}
  </div>
)

const Hamburger = () => (

  <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
    {/*  Mobile menu button */}
    {/* Icon when menu is closed. Menu open: "hidden", Menu closed: "block" */}
    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    {/* Icon when menu is open. Menu open: "block", Menu closed: "hidden" */}
    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
)

const NotificationIcon = () => (
  <button className="flex-shrink-0 p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" aria-label="Notifications">
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  </button>
)

// user:
// email: "rajesh_narayan_98@yahoo.com"
// image: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10220930742431280&height=50&width=50&ext=1601094481&hash=AeRRTPzOWySi1mqo"
// name: "Raj Bps Vikas"