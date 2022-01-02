import {Card,Button} from 'react-bootstrap';
import './QuizStart.styles.scss';

const QuizStart = (props) => {
    return (
        <div className="quizStart__container">
            <Card className="quizStart">
    
    <Card.Body>
      <Button className='quizStart__button'>Start Quiz</Button>
    </Card.Body>
  </Card>
        </div>
    )
};

export default QuizStart;