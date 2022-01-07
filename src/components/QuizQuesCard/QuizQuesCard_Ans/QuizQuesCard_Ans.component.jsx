import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonComp from '../../ButtonComp/ButtonComp.component';
import { quesActions } from '../../../redux/slice/slice';

import './QuizQuesCard_Ans.styles.scss';

const QuizQuesCard_Ans = ({ans,...props}) => {
    const dispatch = useDispatch();
    const [clicked,setClicked] = useState(false);

    const clickHandler = () =>{
        setClicked(true);
    }

    const submitHandler = event => {
        event.preventDefault();
        if(!clicked){
            if(ans === event.target[0].value)
            {
                props.ansCheck(true);
                dispatch(quesActions.addCorrectAnswers());
            } else props.ansCheck(false);
        }
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
                        <input type="text" placeholder='Type Answer...' className="QuizQuesCard_Ans--form-input" />
                    </form>
                </div>

                <div className="QuizQuesCard_Ans--soln-container">
                    <span>{clicked ? ans :`Stuck ?`}</span>
                    <ButtonComp onClick={clickHandler}>See Solution</ButtonComp>
                </div>
            </div>
        </div>
    )
};

export default QuizQuesCard_Ans;