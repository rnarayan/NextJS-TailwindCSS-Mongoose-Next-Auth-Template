import Link from 'next/link'
import { signin, signout, useSession } from 'next-auth/client'
import styles from './nav.module.css'


const links = [
  { href: '/', label: 'Home' },
  { href: '/new', label: 'Add Pet' },
]

export default function Nav() {
  const [session, loading] = useSession()

  return (
    <nav>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <p
        className={`nojs-show ${
          !session && loading ? styles.loading : styles.loaded
        }`}
      >
         {!session && (
          <>
            <a
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault()
                signin()
              }}
            >
              <button className={styles.signinButton}>Sign in</button>
            </a>
          </>
        )}
        {session && (
          <>
            <span
              style={{ backgroundImage: `url(${session.user.image})` }}
              className={styles.avatar}
            />
            <a
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault()
                signout()
              }}
            >
              <button className={styles.signoutButton}>Sign out</button>
            </a>
          </>
        )}
      </p>
    </nav>
  )
}

function NavOriginal() {
  const [session, loading] = useSession()
  return (
    <nav>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <p
        className={`nojs-show ${
          !session && loading ? styles.loading : styles.loaded
        }`}
      >
         {!session && (
          <>
            <span className={styles.notSignedIn}>Not signed in</span>
            <a
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault()
                signin()
              }}
            >
              <button className={styles.signinButton}>Sign in</button>
            </a>
          </>
        )}
        {session && (
          <>
            <span
              style={{ backgroundImage: `url(${session.user.image})` }}
              className={styles.avatar}
            />
            <span className={styles.signedIn}>
              Signed in as <strong>{session.user.email}</strong>
            </span>
            <a
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault()
                signout()
              }}
            >
              <button className={styles.signoutButton}>Sign out</button>
            </a>
          </>
        )}
      </p>
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline">Pets</a>
          </Link>
        </li>
       {/* <li>
       <img
          id="title"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
          alt="pet care logo"
        ></img>
       </li> */}
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="btn-blue no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}


// user:
// email: "rajesh_narayan_98@yahoo.com"
// image: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10220930742431280&height=50&width=50&ext=1601094481&hash=AeRRTPzOWySi1mqo"
// name: "Raj Bps Vikas"