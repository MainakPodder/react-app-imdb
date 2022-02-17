import React from 'react'
import './index.css'
import Cards from './Cards'
import movieData from './Data'
const App = () => {
    return (
        <>
            <h1 className="headingStyle">BEST BOLLYWOOD MOVIES 2022 - IMDb</h1>
            {movieData.map((value) => {
                console.log(value);
                return (
                    <Cards
                        key={value.key}
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