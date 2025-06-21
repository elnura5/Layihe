import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css"

const Home = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cizgifilmler")
      .then((res) => {
        const data = res.data.slice(0, 6);
        setFeatured(data);
      })
      .catch((err) => console.error("API xətası:", err));
  }, []);

  return (
    <div className="home">
      <header className="hero">
        <h1>🎉 Xoş Gəlmisiniz! 🎈</h1>
        <p>Sevdiyiniz cizgi filmləri burada!</p>
        <Link to="/cartoons" className="watch-btn">
          Filmlərə Keç → 🎬
        </Link>
      </header>

      <section className="featured">
        <h2>⭐ Seçilmiş Cizgi Filmləri</h2>
        <div className="cartoon-grid">
          {featured.map((cartoon) => (
            <div key={cartoon._id} className="cartoon-card">
              <h3>{cartoon.title}</h3>
              <Link to={`/cartoon/${cartoon._id}`} className="details-btn">
                Bax 🧸
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
