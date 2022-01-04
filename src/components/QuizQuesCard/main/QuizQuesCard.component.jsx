/* eslint-disable react/jsx-pascal-case */
import {Card} from 'react-bootstrap';
import QuizQuesCard_Topic from '../QuizQuesCard_Topic/QuizQuesCard_Topic.component';
import QuizQuesCard_Ques from '../QuizQuesCard_Ques/QuizQuesCard_Ques.component';
import QuizQuesCard_Ans from '../QuizQuesCard_Ans/QuizQuesCard_Ans.component';
import './QuizQuesCard.styles.scss';

const QuizQuesCard = props => {
    return (
        <>
        <Card className="quizQuesCard__container">
              <Card.Body className='quizQuesCard__body'>
                    <QuizQuesCard_Topic/>
                    <QuizQuesCard_Ques/>
                    <QuizQuesCard_Ans/>
              </Card.Body>
          </Card>
        </>
    )
}

export default QuizQuesCard;