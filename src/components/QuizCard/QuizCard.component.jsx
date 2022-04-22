import React from "react";
// import QuizStart from "../QuizStart/QuizStart.component";
import { useSelector } from "react-redux";
import './QuizCard.styles.scss';
import LoadingScreen from "../Loader/LoadingScreen.component";
import ErrorBoundary from "../../Error Boundary/ErrorBoundary";

const QuizStart = React.lazy(()=>  import(/*webpackPrefetch:true*/ "../QuizStart/QuizStart.component"));
const QuizQuesCard = React.lazy(()=>  import(/*webpackPrefetch:true*/ "../QuizQuesCard/main/QuizQuesCard.component"));
const QuizEndCard = React.lazy(()=>  import(/*webpackPrefetch:true*/ "../QuizEndCard/QuizEndCard.component"));

const QuizCard = (props) => {
    const state = useSelector(state => state); 
    const {ques,currentQues} = state.ques;

    React.useEffect(()=>{
        return async()=>{
         await localStorage.setItem('storeData',JSON.stringify({...state.ques}));
        }
    },[currentQues]);
    
    return (
        <div className="quiz__card--container">
            {currentQues === -1 && 
            (<ErrorBoundary>
                <React.Suspense fallback={<LoadingScreen/>}>
                    <QuizStart/>
                </React.Suspense>
            </ErrorBoundary>
            )}
            
            {((currentQues === 0 || currentQues !== -1) && (currentQues < ques.length)) && 
            (<React.Suspense fallback={<LoadingScreen/>}>
                <QuizQuesCard/>
            </React.Suspense>
            )}

            {currentQues === ques.length && 
            (<React.Suspense fallback={<LoadingScreen/>}>
                <QuizEndCard/>
            </React.Suspense>
            )}
            
        </div>
    )
}

export default QuizCard;