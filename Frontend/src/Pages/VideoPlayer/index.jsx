import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

function VideoPlayer() {
  const { id } = useParams();
  const [cartoon, setCartoon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/cizgifilmler/${id}`)
      .then(res => {
        setCartoon(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Yüklənir...</p>;
  if (!cartoon) return <p>Cizgi filmi tapılmadı!</p>;

 
  const videoId = cartoon.videoUrl.split("youtu.be/")[1].split("?")[0];

  return (
    <div className="video-player-container">
      <h2>{cartoon.title}</h2>
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={cartoon.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="cartoon-info">
        <p><strong>İl:</strong> {cartoon.year}</p>
        <p><strong>Təsvir:</strong> {cartoon.description}</p>
      </div>
      <Link to="/" className="back-link">← Ana səhifəyə qayıt</Link>
    </div>
  );
}

export default VideoPlayer;
