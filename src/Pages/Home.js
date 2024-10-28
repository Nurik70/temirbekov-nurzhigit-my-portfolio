// Home.js
import React from 'react';
import '../Styles/Home.css';
import myPhoto from '../images/my-foto-home.jpg'; // Убедитесь, что путь корректен

const Home = () => {
    return (
        <div className="container home-page">
            <div className="hero">
                <img src={myPhoto} className='img-my-foto' alt='Temirbekov Nurzhigit' />
                
                <h1>Hey, I'm Temirbekov Nurzhigit</h1>
                <p>I study at Salymbekov University, make and create websites. I have small projects.</p>
                <a href="/Pages/Progects.js" className="button-link">View My Projects</a>
            </div>
        </div>
    );
};

export default Home;
