import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ImagesCard from '../assets/images/web2.png'
import ImgFondo from '../assets/images/img1.png'
import './css/Card.css'

class Cards extends React.Component {
    render(){
        return (
            <div className = "card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${ImgFondo}), linear-gradiente(to right,  #67626b, #6779d3)`
            }}
            >
                <div className = "card-body">
                    <div className = "row center ">
                        <div className = "col-6">
                           <img src= {ImagesCard} className= "float-right"/>
                        </div>

                    <div className = "col-6 Fitness-Card-Info">
                    <h1> Desarrollo web </h1>
                    <p>Diseño y desarrollo web</p>
                </div>
            </div>
            </div>
            </div>
            
        )
    }

}

export default Cards