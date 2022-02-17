import React from 'react'
import Cards from './Cards'
import movieData from './Data'
import './index.css'
const App = () => {
    return (
        <>
            <h1 className="headingStyle">BEST BOLLYWOOD MOVIES 2022 - IMDb</h1>
            {movieData.map((value) => {
                return (
                    <Cards
                        name={value.name}
                        img={value.img}
                        content={value.content}
                        rating={value.rating}
                        links={value.links}
                    />
                );
            })}
        </>
    )
}

export default App