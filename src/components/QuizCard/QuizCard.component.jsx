import React from "react";
import QuizStart from "../QuizStart/QuizStart.component";
// import QuizQuesCard from "../QuizQuesCard/main/QuizQuesCard.component";
// import QuizEndCard from "../QuizEndCard/QuizEndCard.component";
import { useSelector } from "react-redux";

import './QuizCard.styles.scss';

const QuizQuesCard = React.lazy(()=>  import(/*webpackPrefetch:true*/ "../QuizQuesCard/main/QuizQuesCard.component"));
const QuizEndCard = React.lazy(()=>  import(/*webpackPrefetch:true*/ "../QuizEndCard/QuizEndCard.component"));

const QuizCard = (props) => {
    const state = useSelector(state => state.ques); 

    return (
        <div className="quiz__card--container">
            {state.currentQues === -1 && (<QuizStart/>)}
            
            {((state.currentQues === 0 || state.currentQues !== -1) && (state.currentQues < state.ques.length)) && 
            (<React.Suspense fallback={<p>Loading...</p>}>
                <QuizQuesCard/>
            </React.Suspense>
            )}

            {state.currentQues === state.ques.length && 
            (<React.Suspense fallback={<p>Loading...</p>}>
                <QuizEndCard/>
            </React.Suspense>
            )}
            
        </div>
    )
}

export default QuizCard;