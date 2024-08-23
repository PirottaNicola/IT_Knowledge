# Hooks

## useCallBack

- used for performance optimization
- useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
- useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).
- in other words: by default when a component re-renders, all of its children re-render too (even if they don't need to). useCallback allows you to memoize a function so that it only re-renders if one of its dependencies (props) changes.

```js
const memoizedCallback = useCallback(() => {
  doSomething(a, b)
}, [a, b])

// or
const memoizedCallback = memo(() => {
  doSomething(a, b)
})

// the returned ChildComponent will only re-render if props.a or props.b changes

return <ChildComponent callback={memoizedCallback} />
```

! this hook it's only useful to optimize performance in some cases, so don't use it as a default.

## useContex

- used to pass data through the component tree without having to pass props down manually at every level.
- access the value of the current context using useContext, and update the context from a component using the Context.Provider's value prop.
- react automatically re-renders all the children that use that Context when the Provider value changes.
- useContext() looks for the closest Provider above it in the tree and uses its value.

```js
//  PARENT
// create a context in the Parent
const MyContext = React.createContext(defaultValue)
// and, if you need to update it in the future, use useState()
const [value, setValue] = useState('light')
// provide a context value to the children
<MyContext.Provider value={value}>
  <Child />
</MyContext.Provider>

// CHILD
// access the context value in the children
const value = useContext(MyContext)
```

## useDeferredValue

- used to defer the update of a value
- it returns a deferred value that is updated asynchronously.
- it's useful when you want to defer a value update until after a transition has finished.
- it's similar to useTransition, but instead of deferring the rendering of a component, it defers the update of a value.

## useEffect

- hooks that lets you synchronize a component with an external system such as a database or DOM.
- it's a function that fires after the component renders.
- it's a replacement for componentDidMount, componentDidUpdate, and componentWillUnmount.
- it's called after every render, including the first render.
- it's called after the DOM has been updated, so you can query the DOM or run post-render effects.
- it's called asynchronously, so you can't rely on the DOM being updated immediately after the component is rendered.

```js
useEffect(() => {
  // do something
  return () => {
    // do something
  }
}, [dependencies])

// if you want to run the effect only once, pass an empty array as the second argument
useEffect(() => {
  // do something
}, [])

// if you want to run the effect after every render, omit the second argument
useEffect(() => {
  // do something
})

// if you want to run the effect only when a specific prop changes, pass that prop as the second argument
useEffect(() => {
  // do something
}, [prop])
```

Example: connecting to an external system

```js
import { useEffect } from 'react'
import { createConnection } from './chat.js'

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234')

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => {
      connection.disconnect()
    }
  }, [serverUrl, roomId])
}
```

When the ChatRoom component above gets added to the page, it will connect to the chat room with the initial serverUrl and roomId. If either serverUrl or roomId change as a result of a re-render (say, if the user picks a different chat room in a dropdown), your Effect will disconnect from the previous room, and connect to the next one. When the ChatRoom component is removed from the page, your Effect will disconnect one last time.
