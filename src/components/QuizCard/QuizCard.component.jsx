import QuizStart from "../QuizStart/QuizStart.component";
import QuizQuesCard from "../QuizQuesCard/main/QuizQuesCard.component";
import QuizEndCard from "../QuizEndCard/QuizEndCard.component";
import { useSelector } from "react-redux";

import './QuizCard.styles.scss';

const QuizCard = (props) => {
    const state = useSelector(state => state.ques); 

    return (
        <div className="quiz__card--container">
            {state.currentQues === -1 && (<QuizStart/>)}
            
            {((state.currentQues === 0 || state.currentQues !== -1) && (state.currentQues < state.ques.length)) && 
            (<QuizQuesCard data={state.ques[state.currentQues]}/>)}

            {state.currentQues === state.ques.length && 
            (<QuizEndCard/>)}
            
        </div>
    )
}

export default QuizCard;