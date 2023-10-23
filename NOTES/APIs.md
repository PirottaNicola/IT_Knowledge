### The 5 API styles

- **Tunnel style**
  "know where you can get something and how to get there", very old way of thinking of APIs, related to the concept of RPC (Remote Procedure Call). this style is used in google's jRPC. Focues on being able to call functions that are avaiable at certain endpoints.
- **Resource Style**
  Resources are avaiable at certain endpoints, and you can do certain things with them. This is the most common style of API, and is used in RESTful APIs.
- **Hypermedia Style**
  This style is used in HATEOAS (Hypermedia as the Engine of Application State). This style is similar to the resource style, but the difference is that the client doesn't need to know the endpoints, it can just follow the links that are provided by the server.
- **Event Style**
  This style is used in webhooks, where the client can register a callback URL with the server, and the server will send a request to that URL when something happens. This is the opposite of the tunnel style, where the client needs to know the endpoints. Kafka is an example of this style, where the client can subscribe to topics, and the server will send events to those topics.
- **Query Style**
  This style is used in GraphQL, where the client can send queries to the server, and the server will respond with the data that the client requested.

### Tips

- prefer returning a JSON object response instead of an array, because it's easier to add more properties to the response in the future without breaking the client code
- prefer using `PATCH` instead of `PUT` for updating resources, because `PATCH` allows you to update only the properties that you want to update, while `PUT` requires you to send the entire resource
- prefer using `DELETE` instead of `POST` for deleting resources, because `DELETE` is idempotent, while `POST` is not
- prefer using `POST` instead of `PUT` for creating resources, because `POST` allows the server to generate the ID of the resource, while `PUT` requires the client to generate the ID of the resource

## Useful website: https://github.com/ByteByteGoHq/system-design-101

# HTTP Requests Headers

```javascript
// Content-Type
fetch('https://example.com/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ key: 'value' }),
})
```

The `Content-Type` header specifies the MIME type of the data in the request or response body. In this example, it is set to `application/json` to indicate that the request body is in JSON format.

```javascript
// Accept
fetch('https://example.com/api/data', {
  headers: {
    Accept: 'application/json',
  },
}).then((response) => response.json())
```

The `Accept` header specifies the MIME types that the client can handle in the response body. In this example, it is set to `application/json` to indicate that the client can handle JSON responses. The `response.json()` method is used to parse the response body as JSON.

```javascript
// Authorization
fetch('https://example.com/api/data', {
  headers: {
    Authorization: 'Bearer <token>',
  },
})
```

The `Authorization` header provides authentication credentials for the request. In this example, it is set to a bearer token for authentication.

```javascript
// User-Agent
fetch('https://example.com/api/data', {
  headers: {
    'User-Agent': 'MyApp/1.0.0',
  },
})
```

The `User-Agent` header identifies the client software making the request. In this example, it is set to `MyApp/1.0.0` to identify the client application and version.

```javascript
// Cache-Control
fetch('https://example.com/api/data', {
  headers: {
    'Cache-Control': 'no-cache',
  },
})
```

The `Cache-Control` header specifies caching behavior for the request or response. In this example, it is set to `no-cache` to indicate that the response should not be cached.

```javascript
// Cookie
fetch('https://example.com/api/data', {
  headers: {
    Cookie: 'sessionid=<session_id>',
  },
})
```

The `Cookie` header provides previously stored cookie data in the request. In this example, it is set to a session ID for authentication.

```javascript
// Location
window.location.href = 'https://example.com/new-page'
```

The `Location` header specifies the URL to redirect to in a response. In this example, it is used to redirect the user to a new page.

```javascript
// Content-Length
fetch('https://example.com/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': JSON.stringify({ key: 'value' }).length,
  },
  body: JSON.stringify({ key: 'value' }),
})
```

The `Content-Length` header specifies the length of the request or response body in bytes. In this example, it is set to the length of the JSON request body.
