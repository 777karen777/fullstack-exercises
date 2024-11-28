import Notification from "./Notification"
import CountryNames from "./CountryNames"
import CountryDescription from "./CountryDescription"

const Countries = ({notification, countries}) => {
    // console.log(countryNames)

    if(notification !== null) {
        return (
            <Notification notification={notification} />
        )        
    }

    if(countries.length !== 1) {
        const countryNames = countries.map(country => country.name.official)
        return (
            <CountryNames names={countryNames} />
        )
    }

    return(
        <CountryDescription country={countries[0]} />
    )



    

}

export default Countries