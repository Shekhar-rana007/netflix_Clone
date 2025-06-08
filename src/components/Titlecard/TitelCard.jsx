import React, { useState, useEffect } from "react";
import "./TitleCard.css";
import { Link } from "react-router-dom";

const TitleCard = ({ title, page, category }) => {
  const [apiData, setApiData] = useState({ results: [] });

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
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setApiData(res);
      })
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div className="titlecards" style={{ padding: "10px 20px" }}>
      <h2>{title || "Popular on Netflix"}</h2>

      <div
        className="card-list"
        style={{ display: "flex", gap: "10px", overflowX: "auto" }}
      >
        {apiData.results?.map((card) => {
          const imgUrl = card.poster_path
            ? `https://image.tmdb.org/t/p/w500${card.poster_path}`
            : "https://via.placeholder.com/300x450?text=No+Image";

          return (
            <Link
              to={`/player/${card.id}`}
              className="card"
              key={card.id}
              style={{ minWidth: "200px" }}
            >
              <img
                src={imgUrl}
                alt={card.original_title}
                style={{
                  borderRadius: "4px",
                  cursor: "pointer",
                  width: "100%",
                }}
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
