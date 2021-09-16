import React from 'react';
import SearchFormHome from "../../components/SearchForm/SearchFormHome";
import Carousel from "../../components/Carousel/Carousel";

const Home = () => {

    const data = [
        {title:"BACKPACKING TRIPS",url:"https://www.wanderon.in/svg/backpacking-trips.svg"},
        {title:"WEEKEND TRIPS",url:"https://www.wanderon.in/svg/weekend-trips.svg"},
        {title:"WORKCATIONS STAYS",url:"https://www.wanderon.in/svg/workcations.svg"},
        {title:"ADVENTURE COURSES",url:"https://www.wanderon.in/svg/scuba.svg"},
        {title:"CUSTOMISED TRIPS",url:"https://www.wanderon.in/svg/customised-trips.svg"},
        {title:"CORPORATE TRIPS",url:"https://www.wanderon.in/svg/corporate-trips.svg"},
    ]

    return (
        <div>
            <SearchFormHome />
            <Carousel title="les mieux notés" data={data}/>
        </div>
    );
};

export default Home;