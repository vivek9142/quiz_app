import { useSelector } from 'react-redux';
import ButtonComp from '../../ButtonComp/ButtonComp.component';

import './QuizQuesCard_Ans.styles.scss';

const QuizQuesCard_Ans = ({submitHandler,clickHandler,initialDisabled,inputFocus,clicked}) => {

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
                    <QuizQuesCardAnsStuck clickHandler={clickHandler} clicked={clicked}/>
                </div>
            </div>
        </div>
    )
};


function QuizQuesCardAnsStuck({clicked,clickHandler}){
    const state = useSelector(state => state.ques);
    const {answer} = state.ques[state.currentQues];
    
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

export default QuizQuesCard_Ans;