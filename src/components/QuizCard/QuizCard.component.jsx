import React from "react";
import QuizStart from "../QuizStart/QuizStart.component";
import { useSelector } from "react-redux";

import './QuizCard.styles.scss';

const QuizQuesCard = React.lazy(()=>  import(/*webpackPrefetch:true*/ "../QuizQuesCard/main/QuizQuesCard.component"));
const QuizEndCard = React.lazy(()=>  import(/*webpackPrefetch:true*/ "../QuizEndCard/QuizEndCard.component"));

const QuizCard = (props) => {
    const {ques,currentQues} = useSelector(state => state.ques); 

    return (
        <div className="quiz__card--container">
            {currentQues === -1 && (<QuizStart/>)}
            
            {((currentQues === 0 || currentQues !== -1) && (currentQues < ques.length)) && 
            (<React.Suspense fallback={<p>Loading...</p>}>
                <QuizQuesCard/>
            </React.Suspense>
            )}

            {currentQues === ques.length && 
            (<React.Suspense fallback={<p>Loading...</p>}>
                <QuizEndCard/>
            </React.Suspense>
            )}
            
        </div>
    )
}

export default QuizCard;