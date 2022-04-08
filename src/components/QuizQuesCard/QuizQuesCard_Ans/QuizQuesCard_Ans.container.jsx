import { useCallback,useState,useRef,useEffect, useMemo } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { quesActions } from '../../../redux/slice/slice';
import QuizQuesCard_Ans from './QuizQuesCard_Ans.component';

const QuizQuesCardAnsContainer = ({ansCheck}) => {
    const state = useSelector(state => state.ques);
    
    const inputFocus = useRef(null);
    const dispatch = useDispatch();
    const [clicked,setClicked] = useState(false);
    const [initialDisabled,setInitialDisabled] = useState(true);

    const instance = setTimeout(()=>
    {
        if(state.currentQues !== state.ques.length)
        setInitialDisabled(false) 
    },1000);

    useEffect(() => {
        inputFocus.current.focus();
        return(()=>{
            if(state.currentQues === state.ques.length) {
                inputFocus.current = null;
                // setInitialDisabled(false);
            }
            clearTimeout(instance);
        });
    }, 
    [inputFocus, initialDisabled, instance, state.currentQues]
    );

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

    if(state.currentQues === state.ques.length) return <></>

    return(
        // eslint-disable-next-line react/jsx-pascal-case
        <QuizQuesCard_Ans 
        submitHandler = {submitHandler}
        clickHandler = {clickHandler}
        initialDisabled = {initialDisabled}
        inputFocus = {inputFocus}
        clicked = {clicked}
        />
    )
}

export default QuizQuesCardAnsContainer;