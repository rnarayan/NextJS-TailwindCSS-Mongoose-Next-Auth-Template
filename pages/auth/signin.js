import React from 'react'
import { providers, signIn } from 'next-auth/client'

export default function SignIn({ providers }) {
    console.log('Custom Signin page was called.')
    return (
        <>
            <div>Custom Signin Page</div>
            {Object.values(providers).map(provider => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
                </div>
            ))}
        </>
    )
}

SignIn.getInitialProps = async (context) => {
    return {
        providers: await providers(context)
    }
}