function ListGroup() {
    const items = [
        'An item',
        'A second item',
        'A third item',
        'A fourth item',
        'And a fifth one',
    ]
    return (
        <>
            <h1>List</h1>
            <ul className='list-group'>
                {items.length < 1 ? <p>Nothing in the list</p> : items.map((item) => (
                    <li key={item} className='list-group-item'>{item}</li> // key is a unique identifier for each item, in this case we use the item itself cause we know it's unique, but we can use an id if we have one
                ))}
            </ul>
        </>
    )
}

export default ListGroup
