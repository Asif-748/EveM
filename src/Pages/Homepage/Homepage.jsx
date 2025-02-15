import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Card from '../../Components/Card/Card';
import { Outlet } from 'react-router-dom';
import Sponsors from '../../Components/Sponsors/Sponsors';
import News from '../../Components/News/News';
import Ratings from '../../Components/Ratings/Ratings';
import Journey from '../../Components/Journey/Journey';


const Homepage = () => {
    return (
        <div>
            <Carousel></Carousel>
            <News></News>
            <Card></Card>
            <Journey></Journey>
            <Sponsors></Sponsors>
            <Ratings></Ratings>
        </div>
    );
};

export default Homepage;