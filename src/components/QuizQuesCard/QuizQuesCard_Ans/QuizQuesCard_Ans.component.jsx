import ButtonComp from '../../ButtonComp/ButtonComp.component';
import { useDispatch } from 'react-redux';
import { quesActions } from '../../../redux/slice/slice';

import './QuizQuesCard_Ans.styles.scss';

const QuizQuesCard_Ans = props => {
    const dispatch = useDispatch();

    const submitHandler = event => {
        event.preventDefault();
        dispatch(quesActions.changeQues())
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
                    <span>Stuck ?</span>
                    <ButtonComp>See Solution</ButtonComp>
                </div>
            </div>
        </div>
    )
};

export default QuizQuesCard_Ans;