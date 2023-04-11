// import NextAuth from 'next-auth'
// import IdentityServer4Provider from 'next-auth/providers/identity-server4'
// export default NextAuth({
//   providers: [
//     IdentityServer4Provider({
//       id: 'demo-identity-server',
//       name: 'Demo IdentityServer4',
//       scope: 'openid profile email api offline_access',
//       domain: 'demo.identityserver.io',
//       clientId: 'interactive.confidential',
//       clientSecret: 'secret',
//       protection: 'pkce'
//     })
//   ],
//   callbacks: {
//     async session(session, token) {
//       debugger
//       session.accessToken = token.accessToken
//       return session
//     },

//     async jwt(token, user, account, profile, isNewUser) {
//       // Add access_token to the token right after signin
//       debugger
//       if (account?.accessToken) {
//         token.accessToken = account.accessToken
//       }
//       return token
//     }
//   }
// })
