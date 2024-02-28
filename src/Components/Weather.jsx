import React from 'react'

export const Weather = () => {
    const apiKey = 'ba0e9df1862d3407f4f5b5ab7559106b';

    const search = async () => {
        const cityName = document.getElementsByClassName('inputCity')[0].value;
        if (cityName === '')
            return 0;

        let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=${apiKey}`;

        //using .then
        //fetch(apiCall).then(response => response.json()).then(data => console.log(data));

        //using async and await
        let result = await fetch(apiCall);
        result = await result.json();
        console.log(result)

        document.getElementsByClassName('cityName')[0].innerHTML = `${result.name}`;
        document.getElementsByClassName('cityTemp')[0].innerHTML = `${result.main.temp} C`;
    }

    return (
        <div className='weatherDiv bg-gradient-to-r from-cyan-500 to-blue-500 p-64 rounded-3xl shadow-lg'>
            <p className='text-6xl mb-6 font-medium leading-tight text-blue-950'>Weather App</p>

            <div className='flex mb-9 space-x-20'>
                <div className='flex mx-auto text-5xl text-gray-700 font-semibold'>City: <p className='cityName ml-8 italic font-bold text-gray-800'> Islamabad</p></div>
                <div className='flex mx-auto text-5xl text-gray-700 font-semibold'>Temperature: <p className='cityTemp ml-8 italic font-bold text-gray-800'>25 C</p></div>
            </div>

            <div className='flex justify-center space-x-10'>
                <input type="text" placeholder='Enter city name' className='inputCity p-2 px-9 rounded-xl text-black opacity-90' />
                <button onClick={() => { search() }} className='border-2 border-gray p-2  rounded-full'>Search</button>
            </div>
        </div>
    )
}