import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import"./style.css"
const AllCartoons = () => {
  const [cartoons, setCartoons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cizgifilmler")
      .then((res) => setCartoons(res.data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div className="all-cartoons">
      <h2>🎥 Bütün Cizgi Filmləri</h2>
      <div className="cartoon-list">
        {cartoons.map((cartoon) => (
          <div className="cartoon-item" key={cartoon._id}>
            <h3>{cartoon.title}</h3>
            <Link to={`/cartoon/${cartoon._id}`} className="watch-btn">
              İzləməyə Başla 🚀
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCartoons;
