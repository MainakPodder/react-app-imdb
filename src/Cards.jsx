import React from 'react';

const Cards = (props) => {
//   console.log(props);
  return (
    <>
    <div className="cards">
      <div className="card">
        <img src={props.img} alt="imdbPic" className="cardImg" />
        <div className="cardInfo">
          <h2 className="cardCategory">{props.name}</h2>
          <h3 className="cardTitle">{props.content}</h3>
          <h4 className="cardTitle also"> {props.rating}</h4>
          <a
            href="https://www.imdb.com/title/tt7518786/?ref_=ttls_li_tt"
            target="_blank"
          >
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  </>
  );
};

export default Cards;
