import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// // you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component { 

constructor(){
    super()
    this.state={
        currentSlide:0
    }
}

changer(parameter){
   this.setState((prevState)=>{
    let next = prevState.currentSlide
    next = (parameter)?next+1:next-1;
    if(next<0)
    {next=0}
    else if(next>2)
    {next=2}
    return{
        currentSlide:next
    }
   })
   
}

  render(){
    let data = images[this.state.currentSlide]
    return <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className="container">
            <button className="back-button" onClick={()=> this.changer(false)}> <ArrowBackIosIcon/> </button>
            <button className="front-button" onClick={()=> this.changer(true)}> <ArrowForwardIosIcon/> </button>

            <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                <h1 className="title">{data.title}</h1>
                <h2 className="sub-title">{data.subtitle}</h2>
                <img className="img" src={data.img} alt='hi'/>
            </div> 
        </div>
    </div>
  }
}

export default Carousel;