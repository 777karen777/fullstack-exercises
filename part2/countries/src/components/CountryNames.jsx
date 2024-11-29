const CountryNames = ({countries, countryView}) => {
    // const names = countries.map(country => country.name.common)

    return (
        <ul style={{ listStyleType: 'none', paddingLeft: '0'}}>
            {countries.map(country => {
                return (
                    <li key={country.name.common}>
                        {country.name.common} <button onClick={() => countryView(country)}>show</button>
                    </li>
                )
            })}

        </ul>
    )

}

export default CountryNames