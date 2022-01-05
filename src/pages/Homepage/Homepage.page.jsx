import QuizCard from '../../components/QuizCard/QuizCard.component';
import DotsVertical from '../../assets/img/dots_verticle.png';
import DotsHorizontal from '../../assets/img/dots_horizontal.png';
import Header from '../../components/Header/Header.component';

const Homepage = props => {
    return (
        <div className="homepage__container">

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
    )
}

export default Homepage;