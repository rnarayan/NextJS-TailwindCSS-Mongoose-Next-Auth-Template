
import Link from "next/link";
import { signin, signout, useSession } from "next-auth/client"
import { Transition } from '@tailwindui/react'
import { useState } from 'react'

const links = [
    { href: "/", label: "Product" },
    { href: "/new", label: "Features" },
    { href: "/", label: "Home" },
    { href: "/new", label: "Add Pet" },
]


const LandingNav = ({ children }) => {
    const [session, loading] = useSession()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
            <div className="relative pt-6 pb-12 lg:pb-20">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
                        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <Logo />
                                <div className="-mr-2 flex items-center md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                    <Hamburger />
                                </div>
                            </div>
                        </div>
                        <NavbarLinks />
                        <NavbarSignIn session={session} />
                    </nav>
                </div>

                <Transition show={isMobileMenuOpen}
                            enter="duration-50 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-50 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95" >
                    {ref => <div ref={ref} className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                                 <MobileMenu />
                            </div> }
                </Transition>
            </div>
    )
}

const NavbarLinks = () => (
    <div className="hidden md:flex md:space-x-10">
        {links.map(({ href, label }) => (
            <a
                key={`${href}${label}`}
                href={href}
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            > {label} </a>
        ))}
    </div>
)

const NavbarSignIn = ({ session }) => (
    <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        <span className="inline-flex rounded-md shadow">
            {!session && (<a href={`/api/auth/signin`}
                onClick={e => signin()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out"
            > Sign in </a>)}
        </span>
    </div>
)

const MobileMenu = ({ session }) => (
    <div className="rounded-md bg-white shadow-xs">
        <div className="z-40 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-md">
                <div className="rounded-lg bg-white shadow-xs overflow-hidden"
                     role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                        <div className="px-5 pt-4 flex items-center justify-between"></div>
                        <MobileMenuLinks />
                        <MobileMenuSignIn session={session} />
                </div>
            </div>
        </div>
    </div>
)

const MobileMenuSignIn = ({ session }) => (
    <div>
        {!session && (
            <a href={`/api/auth/signin`}
                onClick={e => signin()}
                className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
            >Sign in</a>
        )}
        {/* {session && (
        <a href={`/api/auth/signout`}
            onClick={e => signout()}
            className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
        > Sign out </a>
    )} */}
    </div>
)

const MobileMenuLinks = () => (
    <div className="px-2 pt-2 pb-3">
        {links.map(({ href, label }) => (
            <a
                key={`${href}${label}`}
                href={href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                role="menuitem"
            >
                {label}
            </a>
        ))}
    </div>
)

const Logo = () => (
    <a href="#" aria-label="Home">
        <img className="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
            alt="Logo"/>
    </a>
)

const Hamburger = () => (
        <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            id="main-menu"
            aria-label="Main menu"
            aria-haspopup="true"
        >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
)


export default LandingNav
