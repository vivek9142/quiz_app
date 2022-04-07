import { useSelector } from 'react-redux';
import './QuizQuesCard_Ques.styles.scss';


const QuizQuesCard_Ques = (props) => {
    const state = useSelector(state => state.ques);
    const {_id,question} = state.ques[state.currentQues];

    return(
        <div className='QuizQuesCard_Ques--container'>
            <div className="QuizQuesCard_Ques">
                <div className="QuizQuesCard_Ques--ques-num">
                QUESTION {_id} of 6
                </div>
                <div className="QuizQuesCard_Ques--ques-text" style={{animation: `quesAnimation${_id} 1s`}}>
                {question}
                </div>
            </div>
        </div>
    )
}

export default QuizQuesCard_Ques;