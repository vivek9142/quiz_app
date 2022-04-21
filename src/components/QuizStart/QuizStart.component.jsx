import {Card} from 'react-bootstrap';
import ButtonComp from '../ButtonComp/ButtonComp.component';
import {quesActions} from '../../redux/slice/slice';
import { useDispatch,useSelector } from 'react-redux';

import './QuizStart.styles.scss';

const QuizStart = (props) => {
    const dispatch = useDispatch();
    const {ques,error} = useSelector(state => state.ques); 

    if(ques.length === 0 ) throw error;

    const clickHandler = () => {
      dispatch(quesActions.changeQues());
    }
    return (
        <div className="quizStart__container">
            <Card className="quizStart">
              <Card.Body>
                <ButtonComp onClick={clickHandler}>Start Quiz</ButtonComp>
              </Card.Body>
          </Card>
        </div>
    )
};

export default QuizStart;