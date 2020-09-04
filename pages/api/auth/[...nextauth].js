import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  site: process.env.VERCEL_URL,
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
 
  database: process.env.DATABASE_URL,

  session: {jwt: true},

  jwt: {},

  allowSignin: async (user, account) => {return true},

  pages: {
    signin: '/auth/signin',  // Displays signin buttons /pages/auth/signin.js
  },


  events: {signIn: async (message) => { console.log('Signin:',message)}},
  
  callbacks: {
    /**
   * @param  {object} user     User object
   * @param  {object} account  Provider account
   * @param  {object} profile  Provider profile 
   * @return {boolean}         Return `true` (or a modified JWT) to allow sign in
   *                           Return `false` to deny access
   */
    signIn: async (user, account, profile) => {return Promise.resolve(true)},

    session: async (session, user,token) => {
      session.user.id = '12345'
      console.log('nextauth.js session', session)
      return Promise.resolve(session)
    },
}
}
const Auth = (req, res) => NextAuth(req, res, options)

export default Auth
