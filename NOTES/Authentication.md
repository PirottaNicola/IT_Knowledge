# Authentication: It’s Easier Than You Think

What is "authentication"?

- "auth" is a very broad topic. It can be as simple as a username/password combination, or as complex as a multi-factor authentication system. It can be as simple as a single sign-on (SSO) system, or as complex as a federated identity management system.

"where does auth happen?"

- in the server, on request
- DO NOT USE LOCAL STORAGE FOR AUTH (it's not secure, accessible from external js, etc)
- use a cookie to authenticate the user, then use your database to authorize it's actions:
  - user opens page for first time
  - users 'signs in' (fires request to server that returns a secure cookie)
  - client stores that secure cookie
  - from here on, ALL REQUESTS to the server will include that cookie
- user makes request for data
- server receives request asn parses cookie from it
- server checks what user cookie is for
- server checks if user is authorized to make that request
- sercer return the response if user is authorized, error if not

"but what about the client?"

- client makes requests
- requests can be authenticated and authorized
- ex: request to '/api/me' or '/api/current-user'
