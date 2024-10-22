import React, { useState } from 'react'

const WheaterApp = () => {

    // ?q={nombre_de_la_ciudad}&appid={tu_api_key}
    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '0c5ede0731371d427622b5645accecf9'
    const difKelvin = 273.15


    const [ciudad, setCiudad] = useState('')
    const [dataclima, setDataClima] = useState(null)

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (ciudad.length > 0) fetchClima()
    }

    const fetchClima = async () => {
        try {
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`)
            const data = await response.json()
            setDataClima(data)
            console.log(response)
            console.log(data)
        } catch (error) {
            console.error('Error en: ', error)
        }
    }

    return (
        <>
            <div className='container'>
                <h1>Clima</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={ciudad}
                        onChange={handleCambioCiudad}
                    />
                    <button type='submit'>Buscar</button>
                </form>
                {
                    dataclima && (
                        <div>
                            <h2>{dataclima.name}</h2>
                            <p>Temperatura: {parseInt(dataclima?.main?.temp - difKelvin)}°C</p>
                            <p>Condicion Meteotologica: {dataclima.weather[0].description}</p>
                            <img src={`https://openweathermap.org/img/wn/${dataclima.weather[0].icon}@2x.png`}/>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default WheaterApp
