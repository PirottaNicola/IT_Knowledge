import { useState } from 'react'
import Alert from './components/Alert'
import ListGroup from './components/ListGroup'

function App() {
  // props to pass to the child component (props should be immutable, while state is mutable)
  const items = [
    'An item',
    'A second item',
    'A third item',
    'A fourth item',
    'And a fifth one',
  ]
  let heading = 'items'

  // state variable to control the visibility of the Alert component
  const [showAlert, setShowAlert] = useState(true)

  // event handlers
  const handleSelectItem = (item) => {
    console.log(`item "${item}" selected on the child component`)
  }
  const handleButtonClickedInAlert = () => {
    console.log("button clicked on the child component, let's hide the alert")
    setShowAlert(false)
  }

  return (
    <div className='App'>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
      {showAlert && (
        <Alert onButtonClickedInAlert={handleButtonClickedInAlert}>
          some text and <strong>some html</strong> passed as children to the
          child component
        </Alert>
      )}
    </div>
  )
}

export default App
