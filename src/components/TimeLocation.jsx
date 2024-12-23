import React from 'react'

const TimeLocation = ({ weather: {formattedLocalTime, name, country }}) => {
    return (
        <div>
            <div className="flex justify-center items-center my-6">
                <p>{formattedLocalTime}</p>
                {/* <p>Tuesday, 14 May 2024 | Local time: 07:21 AM</p> */}
            </div>

            <div className="flex justify-center items-center my-3">
                <p className='text-3xl font-medium'>{`${name}, ${country}`}</p>
                {/* <p className='text-3xl font-medium'>Berlin, DE</p> */}
            </div>
        </div>
    )
}

export default TimeLocation