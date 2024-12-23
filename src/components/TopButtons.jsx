import React from 'react'

const TopButtons = ({setQuery}) => {

    const cities = [
        {
            id: 1,
            name: 'Delhi'
        },
        {
            id: 2,
            name: 'Mumbai'
        },
        {
            id: 3,
            name: 'Dehradun'
        },
        {
            id: 4,
            name: 'Hyderabad'
        },
        {
            id: 5,
            name: 'Bangalore'
        }
    ]

    return (
        <div className='flex justify-around items-center my-6'>

            {
                cities.map((city) => (
                    <button key={city.id}
                        className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in'
                        onClick={() => setQuery({ q: city.name })}
                    >{city.name}</button>
                ))
            }

        </div>
    )
}

export default TopButtons