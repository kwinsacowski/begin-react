function Fruits () {
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

    return (
        <ul>
            {fruits.map(fruit => <li>{fruit}</li>)}
        </ul>
    )
}

export default Fruits;