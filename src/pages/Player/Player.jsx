import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Player.css";
import back_arrow from "../../assets/back_arrow_icon.png";

const Player = () => {
  const {id}= useParams();
  const navigate = useNavigate();
  const [apiData, setapiData] = useState({
    name: "",
    type: "",
    key: "",
    published_at: "",
  });

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzA1OTUxNTg0ZTE3YzYyOGZjY2NkM2UzNTAwZTdlMCIsIm5iZiI6MTc0OTA1NzU5MC4yNjU5OTk4LCJzdWIiOiI2ODQwODAzNjJjYjdhOTRkY2ZmY2I2MDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ByPf-CrBmeWUusobulgwM3IuCCddiW0gMIS1xUQVTEA",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setapiData(res.results[0]);
      })
      .catch((err) => console.error("API error:", err));
  }, []);
  return (
    <div className="player">
      <img
        // style={{}}
        src={back_arrow}
        alt="back"
        onClick={() => navigate(-1)}
        style={{
          cursor: "pointer",
          width: "30px",
          position: "absolute",
          left: "50px",
        }}
      />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        width="90%"
        height="650"
        title="trailer"
        allowFullScreen
      ></iframe>

      <div className="player-info">
        <p>Date: {new Date(apiData.published_at).toLocaleDateString()}</p>
        <p>Name:{apiData.name}</p>
        <p>Type:{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
