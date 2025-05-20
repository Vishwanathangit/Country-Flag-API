import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom'
import Loading from '../components/Loading'

const CountryList = () => {
    const [Countrydatas, setcountrydata] = useState([])
    const [isloading, setloading] = useState(true)

useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
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
}, [])


    if(isloading){
        return <Loading/>
    }
    return (
        <div>
            <h1 className='text-3xl font-bold mb-4 mt-6 text-center'>Countries</h1>
            <div className='card-container grid grid-cols-4 gap-6 '>
                {Countrydatas.map((country) => {
                    return (
                        <Link to={`/country/${country.name.common}`} className='p-4 border rounded-xl shadow-md text-white'>
                            <img className='w-full h-32 object-contain cursor-pointer' src={country.flags.svg} alt={country.name.common} /> 
                            <h2 className='text-center text-lg font-semibold text-black mt-2'>{country.name.common}</h2>
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}

export default CountryList


// import React, { useEffect, useState } from 'react'
// import Loading from '../components/Loading'

// const CountryList = () => {
//     const [Countrydatas, setcountrydata] = useState([])
//     const [isloading, setloading] = useState(true)

//     async function fetchCountry() {
//         try {
//             const response = await fetch("https://restcountries.com/v3.1/all")
//             const data = await response.json()
//             console.log(data)
//             setcountrydata(data)
//         } catch (error) {
//             console.log(`Error in fetching country data - ${error}`)
//         } finally {
//             setloading(false)
//         }
//     }

//     useEffect(() => {
//         fetchCountry()
//     }, [])

//     if (isloading) {
//         return <Loading />
//     }

//     return (
//         <div>
//             <h1 className='text-3xl font-bold mb-4 mt-6 text-center'>Countries</h1>
//             <div className='card-container grid grid-cols-4 gap-6'>
//                 {Countrydatas.map((country) => {
//                     return (
//                         <div key={country.cca3} className='p-4 border rounded-xl shadow-md text-white'>
//                             <img className='w-full h-32 object-contain' src={country.flags.svg} alt={country.name.common} /> 
//                             <h2 className='text-center text-lg font-semibold text-black mt-2'>{country.name.common}</h2>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

// export default CountryList
