import React from 'react';
import QuizCard from '../../components/QuizCard/QuizCard.component';
import DotsVertical from '../../assets/img/dots_verticle.png';
import DotsHorizontal from '../../assets/img/dots_horizontal.png';

import './Homepage.styles.scss';
import useNameDimension from '../../utils/useNameDimension';

import Header from '../../components/Header/HeaderDesktop/HeaderDesktop.component'


const Homepage = props => {
    const dimension = useNameDimension();
    return (
      <>
      
        <div className="homepage__container">
            {dimension}
            <div className="homepage">
              <div className="homepage__top--container">
                <Header/>
                
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