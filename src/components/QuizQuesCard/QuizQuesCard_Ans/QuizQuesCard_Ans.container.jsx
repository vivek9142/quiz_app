/* eslint-disable react/jsx-pascal-case */
import { createContext , useCallback,useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { quesActions } from '../../../redux/slice/slice';
import QuizQuesCard_Ans from './QuizQuesCard_Ans.component';

const QuizCardContext =  createContext(null);
QuizCardContext.displayName = 'QuizCardStateContext';

const QuizQuesCardAnsContainer = ({ansCheck}) => {
    const state = useSelector(state => state.ques);
   
    const dispatch = useDispatch();
    const [clicked,setClicked] = useState(false);
    
    const {answer} = state.ques[state.currentQues];

    const clickHandler = useCallback(() => setClicked(true),[]);

    const submitHandler = useCallback(event => {
        event.preventDefault();
            if(answer.toLowerCase() === event.target[0].value.toLowerCase())
            {
                ansCheck(true);
                if(!clicked) dispatch(quesActions.addCorrectAnswers());
            } else ansCheck(false);

        setTimeout(()=>{
            dispatch(quesActions.changeQues())
        },2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[clicked,answer])


    if(!state) return

    const value = {
        clickHandler:clickHandler,
        clicked:clicked
    }

    if(state.currentQues === state.ques.length) return <></>

    return(
        <QuizCardContext.Provider value={value}>
                <QuizQuesCard_Ans submitHandler={submitHandler} 
                />
        </QuizCardContext.Provider>
    )
}

export default QuizQuesCardAnsContainer;

export {QuizCardContext};