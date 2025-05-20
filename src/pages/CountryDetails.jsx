import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CountryDetails = () => {
  const { name } = useParams()
  const [countrydata, setcountrydata] = useState([])
  const [isloading, setloading] = useState(true)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setcountrydata(data)
      })
      .catch((error) => {
        console.error("Error fetching country data:", error)
      })
      .finally(() => {
        setloading(false)
      })
  }, [name])

  if (isloading) {
    return <p className="text-center text-lg font-medium">Loading...</p>
  }

  if (!countrydata || countrydata.length === 0) {
    return <p className="text-center text-red-500">No data found</p>
  }

  const country = countrydata[0]

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-4xl font-bold mb-6">{country.name.common}</h2>
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        className="w-60 h-auto mx-auto mb-6 rounded border shadow"
      />
      <p className="text-lg mb-2"><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p className="text-lg mb-2"><strong>Region:</strong> {country.region}</p>
      <p className="text-lg"><strong>Population:</strong> {country.population.toLocaleString()}</p>
    </div>
  )
}

export default CountryDetails
