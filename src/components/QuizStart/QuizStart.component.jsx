import {Card} from 'react-bootstrap';
import ButtonComp from '../ButtonComp/ButtonComp.component';
import './QuizStart.styles.scss';

const QuizStart = (props) => {
    return (
        <div className="quizStart__container">
            <Card className="quizStart">
              <Card.Body>
                <ButtonComp>Start Quiz</ButtonComp>
              </Card.Body>
          </Card>
        </div>
    )
};

export default QuizStart;