import React,{ useContext,useState,useRef,useEffect } from 'react';
import { useSelector } from 'react-redux';
import ButtonComp from '../../ButtonComp/ButtonComp.component';
import { QuizCardContext } from './QuizQuesCard_Ans.container';

import './QuizQuesCard_Ans.styles.scss';

const QuizQuesCard_Ans = ({submitHandler}) => {
    const inputFocus = useRef(null);
    const [initialDisabled,setInitialDisabled] = useState(true);

    useEffect(() => {
        let instance = setTimeout(()=>{
            setInitialDisabled(false) 
            inputFocus.current.focus();
        },1000);
        

        return(()=>{
            clearTimeout(instance);
        });
    }, 
    [initialDisabled]);
    
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
                    <QuizQuesCardAnsStuck/>
                </div>
            </div>
        </div>
    )
};


let QuizQuesCardAnsStuck = () =>{
    const {clicked,clickHandler} = useContext(QuizCardContext);
    const state = useSelector(state => state.ques);
    const {answer} = state.ques[state.currentQues];
    if(!state) return

    return(
        <>
        {clicked ? 
            (<span className={clicked ? 'QuizQuesCard_Ans--soln animation' : 'QuizQuesCard_Ans--soln'}>{answer}</span>)
            : (<>
                <span>'Stuck ?'</span>
                <ButtonComp type='button' onClick={clickHandler}>See Solution</ButtonComp>
                </>)
            }
        </>
    )
}

QuizQuesCardAnsStuck = React.memo(QuizQuesCardAnsStuck);

export default React.memo(QuizQuesCard_Ans,(prev,next)=>{
    // console.log(prev.submitHandler,next.submitHandler);
});

// export default QuizQuesCard_Ans;