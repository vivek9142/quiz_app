import { Card } from 'react-bootstrap';
import ButtonComp from '../ButtonComp/ButtonComp.component';
import './QuizEndCard.styles.scss';

const QuizEndCard = props => {
    return(
        <div className="quizEnd__container">
            <Card className="quizEnd">
              <Card.Body>
                <div className="quizEnd__stats">
                    <div className="quizEnd__stats--accuracy">
                        <span>50%</span>
                        <span>Accuracy</span>
                    </div>

                    <div className="quizEnd__stats--speed">
                        <span>4.04s</span>
                        <span>Avg. Speed</span>
                    </div>
                </div>
                <ButtonComp>Play Again</ButtonComp>
              </Card.Body>
          </Card>
        </div>
    )
}

export default QuizEndCard;