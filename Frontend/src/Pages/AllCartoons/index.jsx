import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";

function AllCartoons() {
  const [cartoons, setCartoons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/cizgifilmler")
      .then(res => setCartoons(res.data))
      .catch(err => console.log(err));
  }, []);

  const filteredCartoons = cartoons.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="all-cartoons-container">
      <h2>Bütün Cizgi Filmləri</h2>
      <input
        type="text"
        placeholder="Axtarış..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="cartoons-list">
        {filteredCartoons.map(cartoon => (
          <Link to={`/cartoon/${cartoon._id}`} key={cartoon._id} className="cartoon-item">
            <img src={cartoon.image} alt={cartoon.title} />
            <h3>{cartoon.title}</h3>
            <p>{cartoon.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllCartoons;
