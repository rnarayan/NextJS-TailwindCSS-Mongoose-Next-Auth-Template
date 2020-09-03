import AuthenticatedNav from "./nav/authenticatedNav"
import LandingNav from "./nav/landingNav"

import { useSession } from "next-auth/client"

const Layout = ({ children }) => {
  const [session, loading] = useSession()

  return (    
    <>
      {/* <MiscHtml /> */}
      {session &&  <AuthenticatedNav />}
      {!session && <LandingNav />}
      <div className="">{children}</div>
    </>
  )
}


export default Layout

//!!May use it. Discovered some issues with MiscHTML Sometimes, it overlays the navigation link in mobile screen and thus links don't work
const MiscHtml = ({ children }) => (
  <>
    <div className="block absolute inset-y-0 h-full w-full">
      <div className="relative h-full">
        <svg
          className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#ad9a0a02-b58e-4a1d-8c36-1b649889af63)"
          />
        </svg>
        <svg
          className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="d2a68204-c383-44b1-b99f-42ccff4e5365"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#478e97d6-90df-4a89-8d63-30fdbb3c7e57)"
          />
        </svg>
      </div>
    </div>
  </>
);