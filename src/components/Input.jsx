import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Input = ({ setQuery, setUnits }) => {

    const [city, setCity] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
        if (city !== "") setQuery({ q: city });
    };

    const handleCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords
                setQuery({ lat: latitude, lon: longitude })
            })
        }
    }

    return (
        <div className="flex flex-row justify-center my-6">
            <div className=" flex flex-row w-3/4 items-center justify-center space-x-4">
                <form onSubmit={handleSearch} className="w-full shadow-xl">
                    <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" placeholder="Search by City Name..." className="w-full text-gray-500 text-xl font-light p-2 capitalize focus:outline-none placeholder:lowercase rounded-md" />
                </form>
               
                <BiSearch size={30} className="cursor-pointer transition ease-out hover:scale-125" onClick={handleSearch} />
                <BiCurrentLocation size={30} className="cursor-pointer transition ease-out hover:scale-125" onClick={handleCurrentLocation} />
               
            </div>

            <div className="flex flex-row w-1/4 items-center justify-center">
                <button className="text-2xl font-medium transition ease-out hover:scale-125" onClick={() => setUnits("metric")}>°C</button>
                <p className="text-2xl font-medium mx-1">|</p>
                <button className="text-2xl font-medium transition ease-out hover:scale-125" onClick={() => setUnits("imperial")}>°F</button>
            </div>
        </div>
    )
}

export default Input