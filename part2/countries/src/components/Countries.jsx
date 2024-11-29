import { useState, useEffect } from "react"
import Notification from "./Notification"
import CountryNames from "./CountryNames"
import CountryDescription from "./CountryDescription"

const Countries = ({notification, countries}) => {
    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
        setSelectedCountry(null);
    }, [countries]);

    const countryView = (country) => {
        setSelectedCountry(country)        
    }
    // console.log(countryNames)
    
    
    if(notification !== null) {
        // if(selectedCountry) {
        //     setSelectedCountry(null)        
        // }
        return (
            <Notification notification={notification} />
        )        
    }
    
    if(countries.length !== 1) {
        
        // setSelectedCountry(null)        
        return (
            <>
                <CountryNames countries={countries} countryView={countryView} />
                {selectedCountry && 
                <CountryDescription country={selectedCountry} />
            }
            </>
        )
    }
    
    // if(selectedCountry) {
    //     setSelectedCountry(null)        
    // }
    // setSelectedCountry(null)        

    return(
        <CountryDescription country={countries[0]} />
    ) 

}

export default Countries