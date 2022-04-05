import ButtonComp from '../../ButtonComp/ButtonComp.component';

import './QuizQuesCard_Ans.styles.scss';

const QuizQuesCard_Ans = ({submitHandler,clickHandler,initialDisabled,inputFocus,ans,clicked}) => {
    
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