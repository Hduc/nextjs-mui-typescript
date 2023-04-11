
 

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default (req, res) =>
  NextAuth(req, res, {
    providers: [
      Providers.IdentityServer4({
        id: 'sso',
        name: 'sso',
        scope: 'open ',
        domain: 'https://identity.minhlong.com/',
        clientId: 'sso',
        clientSecret: process.env.IdentityServer4_CLIENT_SECRET,
      }),
    ],
  });