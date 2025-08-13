import React, { use, useEffect, useState, useRef } from "react";
import "./Titlecards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const Titlecards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const [loading, setLoading] = useState(true);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2NmODgxMTg2OTQ5ZjMxN2E5NWQwMzkyNTQ5MGI5MiIsIm5iZiI6MTc0OTY0MDY4MC44NjgsInN1YiI6IjY4NDk2NWU4NTExNjEzNzI1MzNmZDI5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uH0JWr2f-FKlCazop_g-hvfGRb6aW1O2TKhBSbDnllo",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "popular"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    const handleWheel = (e) => {
      e.preventDefault();
      cardsRef.current.scrollLeft += e.deltaY;
    };

    const refCurrent = cardsRef.current;
    if (refCurrent) {
      refCurrent.addEventListener("wheel", handleWheel);
      return () => {
        refCurrent.removeEventListener("wheel", handleWheel);
      };
    }
  }, [category]);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${
                  card.poster_path || card.backdrop_path
                }`}
                alt={card.title || card.name}
                className="card-image"
              />
              <p>{card.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Titlecards;
