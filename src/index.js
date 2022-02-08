import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import "./index.css";
import movieData from "./Data";
// console.log(movieData);
ReactDOM.render(
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
  </>,
  document.getElementById("root")
);
