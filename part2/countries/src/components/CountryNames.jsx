const CountryNames = ({names}) => {

    return (
        <ul style={{ listStyleType: 'none', paddingLeft: '0'}}>
            {names.map(countryName => {
                return (
                    <li key={countryName}>
                        {countryName}
                    </li>
                )
            })}

        </ul>
    )

}

export default CountryNames