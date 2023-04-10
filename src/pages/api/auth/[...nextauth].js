import NextAuth from 'next-auth'
import IdentityServer4Provider from "next-auth/providers/identity-server4";
export default NextAuth({
  providers: [
    IdentityServer4Provider({
      id: 'sso',
      name: 'web_sso',
      scope: 'openid profile api.webkpi api.identityserver api.webschedule', // Allowed Scopes
      domain: 'https://identity.minhlong.com/',
      clientId: 'webkpi',
      clientSecret: ''
    })
  ],
  callbacks: {
    async session(session, token) {
      debugger
      session.accessToken = token.accessToken
      return session
    },

    async jwt(token, user, account, profile, isNewUser) {
      // Add access_token to the token right after signin
      debugger
      if (account?.accessToken) {
        token.accessToken = account.accessToken
      }
      return token
    }
  }
})
