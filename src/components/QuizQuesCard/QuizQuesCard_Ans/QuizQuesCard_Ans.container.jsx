import { useState,useRef,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { quesActions } from '../../../redux/slice/slice';
import QuizQuesCard_Ans from './QuizQuesCard_Ans.component';

const QuizQuesCardAnsContainer = ({ans,...props}) => {
    const inputFocus = useRef(null);
    const dispatch = useDispatch();
    const [clicked,setClicked] = useState(false);
    const [initialDisabled,setInitialDisabled] = useState(true);

    const instance = setTimeout(()=>
    setInitialDisabled(false) 
    ,1000);

    useEffect(() => {
        inputFocus.current.focus();
        return(()=>{
            clearTimeout(instance);
        });
    }, 
    [inputFocus,initialDisabled,instance]
    );

    const clickHandler = () => setClicked(true);

    const submitHandler = event => {
        event.preventDefault();
            if(ans.toLowerCase() === event.target[0].value.toLowerCase())
            {
                props.ansCheck(true);
                if(!clicked) dispatch(quesActions.addCorrectAnswers());
            } else props.ansCheck(false);

        setTimeout(()=>{
            dispatch(quesActions.changeQues())
        },2000);
    }

    return(
        // eslint-disable-next-line react/jsx-pascal-case
        <QuizQuesCard_Ans 
        submitHandler = {submitHandler}
        clickHandler = {clickHandler}
        initialDisabled = {initialDisabled}
        inputFocus = {inputFocus}
        ans = {ans}
        clicked = {clicked}
        />
    )
}

export default QuizQuesCardAnsContainer;