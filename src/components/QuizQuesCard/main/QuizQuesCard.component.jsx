/* eslint-disable react/jsx-pascal-case */
import { useCallback,useState } from 'react';
import {Card} from 'react-bootstrap';
import QuizQuesCard_Topic from '../QuizQuesCard_Topic/QuizQuesCard_Topic.component';
import QuizQuesCard_Ques from '../QuizQuesCard_Ques/QuizQuesCard_Ques.component';
import QuizQuesCardAnsContainer from '../QuizQuesCard_Ans/QuizQuesCard_Ans.container';
import QuizQuesCard_AnsStatus from '../QuizQuesCard_AnsStatus/QuizQuesCard_AnsStatus.component';
import './QuizQuesCard.styles.scss';

const QuizQuesCard = (props) => {
    const [ansAnimate,setAnsAnimate] = useState(null);

    const answerStatusCheck = useCallback((status) => {
        setAnsAnimate(status===true ? 'right' : 'wrong');
        const instance = setTimeout(()=>{
            setAnsAnimate(null);
        },2000);

        return () =>{
            console.log(instance);
            clearInterval(instance);
        }
    },[]);
     
    return (
        <>
        <Card className="quizQuesCard__container">
              <Card.Body className='quizQuesCard__body'>
                    <QuizQuesCard_Topic/>
                    <QuizQuesCard_Ques/>
                    {typeof ansAnimate === 'string'? 
                    (<QuizQuesCard_AnsStatus status={ansAnimate}/>):
                    (<QuizQuesCardAnsContainer ansCheck={answerStatusCheck}/>)}
              </Card.Body>
          </Card>
        </>
    )
}

export default QuizQuesCard;