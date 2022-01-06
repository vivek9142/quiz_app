import { Card } from 'react-bootstrap';
import ButtonComp from '../ButtonComp/ButtonComp.component';
import {quesActions} from '../../redux/slice/slice';
import {useSelector,useDispatch } from 'react-redux';

import './QuizEndCard.styles.scss';

const QuizEndCard = props => {
    const dispatch = useDispatch();
    const {time,correctAns,ques} = useSelector(state => state.ques);
    
    const clickHandler = () => {
      dispatch(quesActions.restartQuiz());
    }
    return(
        <div className="quizEnd__container">
            <Card className="quizEnd">
              <Card.Body>
                <div className="quizEnd__stats">
                    <div className="quizEnd__stats--accuracy">
                        <span>{((correctAns/ques.length)*100).toFixed(2)}%</span>
                        <span>Accuracy</span>
                    </div>

                    <div className="quizEnd__stats--speed">
                        <span>{(time/ques.length).toFixed(2)}s</span>
                        <span>Avg. Speed</span>
                    </div>
                </div>
                <ButtonComp onClick={clickHandler}>Play Again</ButtonComp>
              </Card.Body>
          </Card>
        </div>
    )
}

export default QuizEndCard;