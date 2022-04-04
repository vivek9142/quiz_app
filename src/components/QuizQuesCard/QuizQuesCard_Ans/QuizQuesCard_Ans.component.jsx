import { useState,useRef,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ButtonComp from '../../ButtonComp/ButtonComp.component';
import { quesActions } from '../../../redux/slice/slice';

import './QuizQuesCard_Ans.styles.scss';

const QuizQuesCard_Ans = ({ans,...props}) => {
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

    const clickHandler = () =>{
        setClicked(true);
    }

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
        <div className="QuizQuesCard_Ans--container">
            <div className="QuizQuesCard_Ans">
                <div className="QuizQuesCard_Ans--main--container">
                    <h3 className="QuizQuesCard_Ans--heading">Answer</h3>
                    <form onSubmit={submitHandler} className="QuizQuesCard_Ans--form">
                        <input type="text" ref={inputFocus} placeholder='Type Answer...' disabled={initialDisabled} className="QuizQuesCard_Ans--form-input" />
                    </form>
                </div>

                <div className="QuizQuesCard_Ans--soln-container">
                    {clicked ? 
                    (<span className={clicked ? 'QuizQuesCard_Ans--soln animation' : 'QuizQuesCard_Ans--soln'}>{ans}</span>)
                    : (<>
                        <span>'Stuck ?'</span>
                        <ButtonComp type='button' onClick={clickHandler}>See Solution</ButtonComp>
                        </>)
                    }
                </div>
            </div>
        </div>
    )
};

export default QuizQuesCard_Ans;