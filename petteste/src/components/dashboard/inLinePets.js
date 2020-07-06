import React from 'react';
import { NavLink } from 'react-router-dom'
import M from 'materialize-css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Pets } from '../project/pets'
import Cards from '../project/cards'

  class InLinePets extends React.Component {

    render(){

        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            }
        };
    return(

        <div className="container">

            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                centerMode={true}
            >
                {

                    Pets.map((nomePet, i) => {
                        return (
                            <i className="carousel-item" style={{ zIndex: '-999' }} href={'#'+ Pets[i].id}>
                                <Cards
                                    key={Pets[i].id}
                                    id={Pets[i].id}
                                    nomePet={Pets[i].nomePet}
                                    nameDono={Pets[i].nameDono}
                                    img={Pets[i].img}         />
                            </i>
                        );
                    }
                        )

                }
            </Carousel>;

        		</div>
    	
      		
          )



  }
}

export default InLinePets;