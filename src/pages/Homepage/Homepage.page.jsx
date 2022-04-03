import {useState,useEffect} from 'react';
import QuizCard from '../../components/QuizCard/QuizCard.component';
import DotsVertical from '../../assets/img/dots_verticle.png';
import DotsHorizontal from '../../assets/img/dots_horizontal.png';
import HeaderDesktop from '../../components/Header/HeaderDesktop/HeaderDesktop.component';
import HeaderSidebar from '../../components/Header/HeaderSidebar/HeaderSidebar.component';

import './Homepage.styles.scss';
import useDimensions from '../../utils/screenDimension';



const Homepage = props => {
    const dimension = useDimensions();
    return (
      <>
      
        <div className="homepage__container">
            {dimension.width}
            <div className="homepage">
              <div className="homepage__top--container">
                <HeaderDesktop/>
                <HeaderSidebar/>
              </div>
              <div className="homepage__center-container">
                <div className="dots__horizontal-image_container">
                  <img src={DotsHorizontal} alt="dots__horizontal" />
                </div>
                <QuizCard/>
                <div className="dots__vertical-image_container">
                  <img src={DotsVertical} alt="dots__vertical" />
                </div>
              </div>              

            </div>
          
          </div>
          </>
    )
}

export default Homepage;