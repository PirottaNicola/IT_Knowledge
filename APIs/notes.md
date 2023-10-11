# From 'The full stack developer' book

### APIs

REST's most important parts are the design constraints underlying these APIs:

- #### separation of concerns between client and server
  DO NOT try to build one API to satisfy every situation. A product API might be designed to be accessible from a javascript app running in a browser as well as from automated batch import processes.
  It is common for server-to-server communication to use API keys, but for ursers of your application to bave some common login. If your API is handling both server-to server- authentication and this typical user authentication, it can cause complexity
  Instead, what we could do is introduce layering to APIs. One such set of layers is a rich backend API, and an API that allow front-end UIs to communicate back to a server.
  This layer also comes in handle to put strong validation and authentication checks, which means the backend api doesn't need to have as complex validation rules or authorization structure.
- #### stateless
  the most important thing about RESTful APIs is that they should not hold any state about the clients that are using it. this gives you the freedom to scale the implementation of your API by allowing it to run on many different servers, with only th eunderlying database shared
- #### cachability
  Often implemented by caching responses to GET requests, introduce the problem of receiving old data cause the cached one has not been updated yet.
- #### a layered system
- #### a uniform interface
  ![Alt text](../../NOTES/assets/restful%20api.png)

### SECURITY

!!! Simply validationg in Javascript on the client side is not enough, you need to validate on the server side as well otherwise, a malicious user could bypass your client-side validation and send invalid data to your API.

Microsoft introduced the menmonic STRIDE to help developers think about the different types of threats that can affect their applications:

- Spoofing identity: an attacker pretends to be someone else
- Tampering with data: an attacker changes data in transit
- Repudiation: an attacker denies performing an action
- Information disclosure: an attacker gains access to data they shouldn't have
- Denial of service: an attacker prevents legitimate users from using the system
- Elevation of privilege: an attacker gains access to functionality they shouldn't have

Another common menomic used is DREAD, where 5 different attributes are condisedred and given a score from 1 to 10:

- Damage potential: how much damage could an attacker do if they exploited this vulnerability?
- Reproducibility: how easy is it for an attacker to reproduce the attack?
- Exploitability: how much work is it for an attacker to exploit this vulnerability?
- Affected users: how many users are affected by this vulnerability?
- Discoverability: how easy is it for an attacker to discover this vulnerability?

Checklist are another powerful method to help verify consitency and completeness of your security measures. Here are some examples:

- Are all passwords stored in a secure way?
- Are all passwords transmitted over a secure connection?
- Are all passwords encrypted in transit?
- Are all passwords encrypted at rest?
- Are all passwords hashed with a salt?
- Are all passwords hashed with a strong hashing algorithm?
- Are all passwords hashed with a slow hashing algorithm?

The two most popular lists are the OWASP and the CWE.

These are the OWASP top 10 risks:

#### Injection

Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query. The attacker’s hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization

#### Broken Authentication

Application functions related to authentication and session management are often implemented incorrectly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other users’ identities temporarily or permanently.

#### Cross-Site Scripting (XSS)

XSS flaws occur whenever an application includes untrusted data in a new web page without proper validation or escaping, or updates an existing web page with user-supplied data using a browser API that can create JavaScript. XSS allows attackers to execute scripts in the victim’s browser which can hijack user sessions, deface web sites, or redirect the user to malicious sites.
Web browsers have a security model known as the same-origin policy. the core of this policty is that js code only has access to web pages that are in the same domain as the one that loaded the js. This means that if you have a web page that loads js from a different domain, that js code will not be able to access the DOM of the page that loaded it. But this is not enough to prevent XSS attacks. If an attacker can trick a user into clicking a link that loads a page from a different domain, that page can still access the DOM of the original page. This is known as a cross-site request forgery (CSRF) attack.

#### Security Misconfiguration

Good security requires having a secure configuration defined and deployed for the application, frameworks, application server, web server, database server, and platform. Secure settings should be defined, implemented, and maintained, as defaults are often insecure. Additionally, software should be kept up to date.

#### Sensitive Data Exposure

Many web applications and APIs do not properly protect sensitive data, such as financial, healthcare, and PII. Attackers may steal or modify such weakly protected data to conduct credit card fraud, identity theft, or other crimes. Sensitive data deserves extra protection such as encryption at rest or in transit, as well as special precautions when exchanged with the browser.

#### Missing Function Level Access Control

Most web applications verify function level access rights before making that functionality visible in the UI. However, applications need to perform the same access control checks on the server when each function is accessed. If requests are not verified, attackers will be able to forge requests in order to access functionality without proper authorization.

#### Cross-Site Request Forgery (CSRF)

A CSRF attack forces a logged-on victim’s browser to send a forged HTTP request, including the victim’s session cookie and any other automatically included authentication information, to a vulnerable web application. This allows the attacker to force the victim’s browser to generate requests the vulnerable application thinks are legitimate requests from the victim.

#### Using Components with Known Vulnerabilities

Components, such as libraries, frameworks, and other software modules, almost always run with full privileges. If a vulnerable component is exploited, such an attack can facilitate serious data loss or server takeover. Applications using components with known vulnerabilities may undermine application defenses and enable a range of possible attacks and impacts.

#### Unvalidated Redirects and Forwards

Web applications frequently redirect and forward users to other pages and websites, and use untrusted data to determine the destination pages. Without proper validation, attackers can redirect victims to phishing or malware sites, or use forwards to access unauthorized pages.

### DEPLOYMENT

The saas Heroku wrote a list of 12 factors that they believe are important to consider when building a cloud-native application:

- #### Codebase
  One codebase tracked in revision control, many deploys. In a mono-repo all services and libraries are stored in the same repository. This makes it easy to share code between services and libraries, but it also means that all services and libraries are deployed at the same time.
- #### Dependencies
  Explicitly declare and isolate dependencies. This means that you should not rely on globally installed dependencies, but instead declare all dependencies in a package.json file.
- #### Config
  Store config in the environment. This means that you should not store config in your codebase, but instead use environment variables to configure your application.
- #### Backing services
  Treat backing services as attached resources. This means that you should not rely on a specific backing service, but instead be able to switch to a different backing service without having to change your application. A backing service is anything that your app communicates with over the network, such as a database, a message queue, or a third-party API.
- #### Build, release, run
  Strictly separate build and run stages. This means that you should not build your application when it is deployed, but instead build it before it is deployed. This allows you to test your application before it is deployed, and it also means that you can deploy the same build multiple times. This is important if you need to roll back a deployment. It also means that you can deploy the same build to multiple environments, such as staging and production.
- #### Processes
  Execute the app as one or more stateless processes. This means that you should not rely on a specific server, but instead be able to deploy your application to any server. This also means that you should not rely on a specific instance of your application, but instead be able to scale your application by running multiple instances of it.
- #### Port binding
  Export services via port binding. This means that you should not rely on a specific port, but instead be able to run your application on any port. This is important if you want to run multiple instances of your application on the same server.
- #### Concurrency
  Scale out via the process model. This means that you should not rely on a specific instance of your application, but instead be able to scale your application by running multiple instances of it.
- #### Disposability
  Maximize robustness with fast startup and graceful shutdown. By optimizing startup and shutdown, you can reduce the time it takes to deploy a new version of your application, and you can also reduce the time it takes to recover from a failure.
- #### Dev/prod parity
  Keep development, staging, and production as similar as possible. Minimize the gap between all environments.
- #### Logs
  Treat logs as event streams. This means that you should not store logs in files, but instead stream them to a log aggregator. This allows you to search and filter logs, and it also means that you can easily scale your application without having to worry about log files.
- #### Admin processes
  Run admin/management tasks as one-off processes. This means that you should not run admin tasks as part of your application, but instead run them as separate processes. This allows you to run admin tasks on any server, and it also means that you can run admin tasks in parallel with your application.

### Cloud services

- #### SaaS (Software as a Service)
  SaaS is a software distribution model in which a third-party provider hosts applications and makes them available to customers over the Internet. SaaS is one of three main categories of cloud computing, alongside infrastructure as a service (IaaS) and platform as a service (PaaS).
- #### PaaS (Platform as a Service)
  PaaS is a cloud computing model in which a third-party provider delivers hardware and software tools -- usually those needed for application development -- to users over the internet. A PaaS provider hosts the hardware and software on its own infrastructure. As a result, PaaS frees users from having to install in-house hardware and software to develop or run a new application.
- #### IaaS (Infrastructure as a Service)
  IaaS is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).
- #### FaaS (Function as a Service)
  FaaS is a category of cloud computing services that provides a platform allowing customers to develop, run, and manage application functionalities without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app.
- #### BaaS (Backend as a Service)
  BaaS is a cloud computing category that developers use to build and run mobile and web applications. It provides developers with a way to link their applications to cloud storage and other back-end features while also providing features such as user management, push notifications, and integration with social networking services.
- #### DaaS (Data as a Service)
  DaaS is a data management strategy that uses the cloud to deliver data storage, integration, processing, and/or analytics services via a network connection. DaaS is similar to software as a service (SaaS), in which software is hosted in the cloud and accessed via the internet. DaaS is also known as data on demand, cloud-based data services and data utility services.



# General bites of knowledge

