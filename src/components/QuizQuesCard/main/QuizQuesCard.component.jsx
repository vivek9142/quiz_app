/* eslint-disable react/jsx-pascal-case */
import { useState } from 'react';
import {Card} from 'react-bootstrap';
import QuizQuesCard_Topic from '../QuizQuesCard_Topic/QuizQuesCard_Topic.component';
import QuizQuesCard_Ques from '../QuizQuesCard_Ques/QuizQuesCard_Ques.component';
import QuizQuesCard_Ans from '../QuizQuesCard_Ans/QuizQuesCard_Ans.component';
import QuizQuesCard_AnsStatus from '../QuizQuesCard_AnsStatus/QuizQuesCard_AnsStatus.component';
import './QuizQuesCard.styles.scss';

const QuizQuesCard = ({data}) => {
    const [ansAnimate,setAnsAnimate] = useState(null);

    const answerStatusCheck = (status) => {
        
        setAnsAnimate(status===true ? 'right' : 'wrong');
        setTimeout(()=>{
            setAnsAnimate(null);
        },2000);
    }
     
    return (
        <>
        <Card className="quizQuesCard__container">
              <Card.Body className='quizQuesCard__body'>
                    <QuizQuesCard_Topic topic={data.category}/>
                    <QuizQuesCard_Ques id={data._id} question={data.question}/>
                    {typeof ansAnimate === 'string'? 
                    (<QuizQuesCard_AnsStatus status={ansAnimate}/>):
                    (<QuizQuesCard_Ans ans={data.answer} ansCheck={answerStatusCheck}/>)}
              </Card.Body>
          </Card>
        </>
    )
}

export default QuizQuesCard;