import Weather from "./Weather"

const CountryDescription = ({country}) => {
    // console.log(country)
    const name = country.name.common
    const capital = country.capital
    const flagSource = country.flags.png
    const languages = country.languages ? Object.values(country.languages) : []
    // console.log(country)
    
    return (
        <div>
            <h2> {name} </h2>
            <div>capital {capital} </div>
            <div>аrеа {country.area} </div>

            <h3>languages:</h3>
            <ul >{languages.map((language, index) => (
                <li key={index}> {language} </li>
            ))}</ul>
            <img src={flagSource} alt={`Flag of ${name}`} style={{width: '150px', height: '150px'}} />

            <Weather country={country} />
        </div>
    )
}

export default CountryDescription