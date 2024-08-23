import { useState } from 'react'

function ListGroup({ items, heading, onSelectItem }) {
  // destructuring props. If not, we would have to use props.items and props.heading

  // Hooks
  const [selectedIndex, setSelectedIndex] = useState(-1) // -1 means no item is selected at the beginning

  // event handlers
  const handleClick = (event) => {
    // highlight selected item
    setSelectedIndex(event.target.dataset.index)
  }

  // render
  return (
    <>
      <h1>{heading}</h1>
      <ul className='list-group'>
        {items.length < 1 ? (
          <p>Nothing in the list</p>
        ) : (
          items.map((item, index) => (
            <li
              key={item}
              data-index={index}
              className={
                selectedIndex == index
                  ? 'list-group-item active'
                  : 'list-group-item'
              }
              onClick={(event) => {
                handleClick(event)
                onSelectItem(item)
              }}
            >
              {item}
            </li> // key is a unique identifier for each item, in this case we use the item itself cause we know it's unique, but we can use an id if we have one
          ))
        )}
      </ul>
    </>
  )
}

export default ListGroup
