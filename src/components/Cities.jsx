function Cities  (){
    const citiesByCountry = [
  { country: "USA", cities: ["New York", "Los Angeles", "Chicago"] },
  { country: "Japan", cities: ["Tokyo", "Kyoto", "Osaka"] },
  { country: "France", cities: ["Paris", "Lyon", "Marseille"] },
];

return (
    <ul>
        {citiesByCountry.map((item, index) => 
        (<li key ={index}>{item.country}
        <ul>
            {item.cities.map((city,idx) =>
            <li key = {idx}>{city}</li>)}
        </ul>
        </li>))}
    </ul>
)
    }

    export default Cities;