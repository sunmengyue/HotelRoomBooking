import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

class Services extends Component {
    constructor(props){
        super(props);
        this.state = {
            services:[
                {
                    icon:<FaCocktail />,
                    title: "Free cocktails",
                    info: "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                },
                {
                    icon:<FaHiking />,
                    title: "Endless Hiking",
                    info: "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                },
                {
                    icon:<FaShuttleVan />,
                    title: "Free Shuttle",
                    info: "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                },
                {
                    icon:<FaBeer />,
                    title: "Strongest Beer",
                    info: "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                }

            ]
        }
    }
    render(){
        return(
             <section className="services">
                 <Title title="services" />
                 <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                 </div>
             </section>
        );
    }
}

export default Services;