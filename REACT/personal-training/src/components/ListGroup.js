function ListGroup() {
    // data
    const items = [
        'An item',
        'A second item',
        'A third item',
        'A fourth item',
        'And a fifth one',
    ]

    // event handlers
    const handleClick = (event) => {
        console.log(event.target.innerText);
        console.log(`clicked on item "${event.target.innerText}"`)
    }

    // render
    return (
        <>
            <h1>List</h1>
            <ul className='list-group'>
                {items.length < 1 ? <p>Nothing in the list</p> : items.map((item, index) => (
                    <li key={item} className='list-group-item' onClick={handleClick}>{item}
                    </li> // key is a unique identifier for each item, in this case we use the item itself cause we know it's unique, but we can use an id if we have one
                ))}
            </ul>
        </>
    )
}

export default ListGroup
