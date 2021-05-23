function ItemList({ items }) {
    return (
        <ul>
            {items.map(item => {
                <li>{item.name}</li>
            })}
        </ul>
    )
}
