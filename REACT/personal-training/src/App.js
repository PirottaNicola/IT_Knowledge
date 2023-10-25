import ListGroup from './components/ListGroup'

function App() {
  // props
  const items = [
    'An item',
    'A second item',
    'A third item',
    'A fourth item',
    'And a fifth one',
  ]
  let heading = 'items'

  // event handlers
  const handleSelectItem = (item) => {
    console.log(`item "${item}" selected on the child component`)
  }

  return (
    <div className='App'>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
    </div>
  )
}

export default App
