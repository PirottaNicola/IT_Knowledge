import { Button } from './Button'

const Alert = ({ children, onButtonClickedInAlert }) => {
  // children is a reserved word in React, allows to pass the content inside the tags in the parent comoponent (see App.js) to the child component

  return (
    <>
      <div className='alert alert-primary'>
        {children}
        <br />
        <Button onButtonClicked={onButtonClickedInAlert}>Hide</Button>
      </div>
    </>
  )
}

export default Alert
