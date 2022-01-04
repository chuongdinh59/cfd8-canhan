import React from 'react';
import Slider from "../../component/Slider";
import Blog from "./Blog";
import Categories from "./Category";
import HeadLine from "./HeadLine";
import Selling from "./Selling";

function HomePage(props) {
    const titles1 = [
        "Kitchen", "Meat and fish", "Special nutrition", "Pharmacy  ", "Baby"
      ]
      const titles2 = [
        "Carrots", "Tomatoes", "Potatoes", "Chicken", "Pork"
  ]
 
    return (
        <>
            <Categories />
            <Selling name="Best selling products" btn="More products" titles={titles1}/>
            <Selling name="Best from Farmers" btn="More products" titles={titles2} />
            <Slider />
            <HeadLine />
           <Blog />
        </>
    );
}

export default HomePage;