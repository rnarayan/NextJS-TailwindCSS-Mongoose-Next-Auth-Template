import React from 'react'
import { providers, signIn } from 'next-auth/client'

export default function SignIn({ providers }) {
    return (
        <div className='w-full' >
            <div className='"font-bold text-center text-gray-700 text-lg py-2 px-1'>Custom Signin Page</div>
            {Object.values(providers).map(provider => (
                <div key={provider.name}>
                <form>
                        <button 
                            className="flex items-center bg-white font-light hover:font-normal hover:bg-cool-gray-100 shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="button"
                            onClick={() => signIn(provider.id)}
                        >
                            {/* {provider.name == "Google"? <div className="inline-block pr-2"><GoogleIcon /></div> : ""} */}
                            <div className="flex items-center"> 
                            {provider.name == "Google" ? <div className="w-max-content pr-2"><GoogleIcon /></div> : ""}
                                {provider.name == "Facebook" ? <div className="w-max-content pr-2"><FBIcon /></div> : ""}
                            Sign in with {provider.name}
                            </div>
                        </button>
                </form>
                </div>
            ))}
        </div>
    )
}


SignIn.getInitialProps = async (context) => {
    return {
        providers: await providers(context)
    }
}

const GoogleIcon = () => <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="evenodd"><path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path><path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path><path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path><path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path><path fill="none" d="M0 0h18v18H0z"></path></g></svg>

const FBIcon = () => <svg className="-ml-1" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="250 50 50 300"> <g fill="#000" fillRule="evenodd"><path d="m410.096 200.048c0-71.818-58.23-130.048-130.048-130.048s-130.048 58.23-130.048 130.048c0 64.905 47.55 118.709 109.73 128.476v-90.875h-33.029v-37.601h33.029v-28.658c0-32.59 19.422-50.604 49.122-50.604 14.228 0 29.115 2.542 29.115 2.542v32.005h-16.405c-16.148 0-21.196 10.022-21.196 20.318v24.396h36.064l-5.761 37.601h-30.304v90.875c62.18-9.749 109.73-63.553 109.73-128.476z" fill="#1977f3" ></path><path d="m330.67 237.648 5.761-37.601h-36.064v-24.396c0-10.278 5.029-20.318 21.196-20.318h16.405v-32.005s-14.886-2.542-29.115-2.542c-29.7 0-49.122 17.996-49.122 50.604v28.658h-33.029v37.601h33.029v90.875c6.62 1.041 13.405 1.572 20.318 1.572s13.698-.549 20.318-1.572v-90.875h30.304z" fill="#fefefe" ></path></g></svg>
