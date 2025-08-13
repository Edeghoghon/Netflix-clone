import React, { useEffect, useState } from "react";
import "./Player.css"; // Assuming you have a CSS file for styling
import back_arrow_icon34 from "../../assets/back_arrow_icon34.png"; // Adjust the path as necessary
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();

  const navigation = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow_icon34}
        alt=""
        onClick={() => {
          navigation(-2);
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`} // Replace VIDEO_ID with the actual video ID
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)} </p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
