import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import dbConnect from  '../../../utils/dbConnect'

const options = {
  site: process.env.VERCEL_URL,
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),

  ],

  // database: process.env.DATABASE_URL,
  // DATABASE_URL=sqlite://localhost/:memory:?synchronize=true
  // database: {
  //   type: "mongodb",
  //   useNewUrlParser: true,
  //   url: process.env.DATABASE_URL,
  // },

  session: { jwt: true },

  jwt: {},

  allowSignin: async (user, account) => { return true },

  pages: {
    signin: '/auth/signin',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },

  events: { signIn: async (message) => { console.log('Signin:', message) } },

  callbacks: {
    /**
   * @param  {object} user     User object
   * @param  {object} account  Provider account
   * @param  {object} profile  Provider profile 
   * @return {boolean}         Return `true` (or a modified JWT) to allow sign in
   *                           Return `false` to deny access
   */
    signIn: async (user, account, profile) => {
      console.log('Nextauthjs line 53 signin callback')
      // console.log('user:', user)
      // console.log('account:', account)
      // console.log('profile:', profile)
      // await dbConnect();
      // const result = await Usr.find({});
      // console.log('result:',result)
      return Promise.resolve(true)
    },

    redirect: async (url, baseUrl) => { return Promise.resolve(baseUrl) },

    session: async (session, user, token) => {
      session.user.id = '12345'
      // console.log('nextauth.js session', session)
      return Promise.resolve(session)
    },
  }
}
const Auth = (req, res) => NextAuth(req, res, options)

export default Auth
