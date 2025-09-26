function Colors (){
    const colors = ["soft peach", "blush pink", "lavendar mist", "periwinkle", "sky blue", "mint glow", "golden glow", "coral haze"];

    return (
        <ul>
            {colors.map(color => <li>{color}</li>)}
        </ul>
    )
}

export default Colors;