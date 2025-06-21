import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import"./style.css"

const VideoPlayer = () => {
  const { id } = useParams();
  const [cartoon, setCartoon] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/cizgifilmler/${id}`)
      .then((res) => setCartoon(res.data))
      .catch((err) => console.error("Video gətirilərkən xəta:", err));
  }, [id]);

  if (!cartoon) return <p>Yüklənir...</p>;

  // YouTube URL-dən video ID çıxarma
  const getYoutubeId = (url) => {
    const match = url.match(/(?:youtu\.be\/|v=)([^&]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYoutubeId(cartoon.videoUrl);

  return (
    <div className="video-player-container">
      <h2>{cartoon.title}</h2>
      <div className="video-frame">
        {videoId ? (
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={cartoon.title}
            allowFullScreen
          ></iframe>
        ) : (
          <p>Video tapılmadı</p>
        )}
      </div>
      <div className="details">
        <p className="desc"><strong>Haqqında:</strong>{cartoon.description}</p>
        <p><strong>İl:</strong> {cartoon.year}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
