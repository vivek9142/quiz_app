import { useCallback,useState,useRef,useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { quesActions } from '../../../redux/slice/slice';
import QuizQuesCard_Ans from './QuizQuesCard_Ans.component';

const QuizQuesCardAnsContainer = ({ansCheck}) => {
    const state = useSelector(state => state.ques);
    
    const inputFocus = useRef(null);
    const dispatch = useDispatch();
    const [clicked,setClicked] = useState(false);
    const [initialDisabled,setInitialDisabled] = useState(true);
    
    useEffect(() => {
        let instance = setTimeout(()=>{
            setInitialDisabled(false) 
        },1000);
        inputFocus.current.focus();

        return(()=>{
            clearTimeout(instance);
        });
    }, 
    [inputFocus, initialDisabled]);

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