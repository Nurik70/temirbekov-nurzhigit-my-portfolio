import React from "react";
import "../Styles/Achivement.css";
import crossFoto from "../images/cross.jpg";

const Achivement = () => {
  return (
    <div className="main-achivement">
      <div className="word-achi-top">
        <h1>
        My Achivement
        </h1> 
      </div>
      <div className="row">
        
        <div className="information-achi">
          <h3>Project</h3>
          <p>
            I have a small project, my partner and I made a website for selling
            sneakers. The goal of the project was to create a website and sell
            it to a sneaker store.
          </p>
        </div>
        <div className="information-achi">
          <img src={crossFoto} className="img-cross-foto" alt="Cross Foto" />
          <a href="/Pages/Progects.js" className="button-link-prog">
            View My Projects
          </a>
        </div>
      </div>
      <div className="row">
        <div className="information-achi">
          <h3>Education and Certifications</h3>
          <p>
            CIn elementary school, I took part in competitions and received 1st
            place, graduated with honors from the Salymbekov Bissunes School
            courses and received a diploma.
          </p>
        </div>
        <div className="information-achi">
          <h3>Certifications and diploma</h3>
          <p>📄 Salymbekov Bissunes School</p>
          <p>🎗 diploma</p>
        </div>
      </div>
      <div className="row">
        <div className="information-achi">
          <h3>Sport</h3>
          <p>
            From an early age I went to wrestling 🤼
            , participated in
            competitions, received prizes and I have several medals. After 7th
            grade I went to football and participated in competitions.
          </p>
        </div>
        <div className="information-achi">
          <h3>Medals and Achivement</h3>
          <div>
          🥇 2 medals
          🥈 3 medals
          🥉 4 medals
          </div>
        </div>
      </div>
      <div></div>
    </div>
    
    
  );
};

export default Achivement;
