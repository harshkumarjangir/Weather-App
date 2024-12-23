import React from 'react'

const ForeCast = ({title, data}) => {

    // const data = [1, 2, 3, 4,]

    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="font-medium uppercase">{title}</p>
                {/* <p className="font-medium uppercase">3 hour forecast</p> */}
            </div>

            <hr className='my-1' />

            <div className="flex items-center justify-between">
                {data.map((d, index) => (
                    <div key={index} className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>{d.title}</p>
                        {/* <p className='font-light text-sm'>Wed</p> */}
                        <img src={d.icon} alt="weather icon" className='w-1/2 my-1' />
                        <p className='font-medium'>{`${d.temp.toFixed()}°`}</p>
                        {/* <p className='font-medium'>12°</p> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ForeCast