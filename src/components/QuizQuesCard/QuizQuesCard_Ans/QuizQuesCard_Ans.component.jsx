import ButtonComp from '../../ButtonComp/ButtonComp.component';
import './QuizQuesCard_Ans.styles.scss';

const QuizQuesCard_Ans = props => {
    return(
        <div className="QuizQuesCard_Ans--container">
            <div className="QuizQuesCard_Ans">
                <div className="QuizQuesCard_Ans--main--container">
                    <h3 className="QuizQuesCard_Ans--heading">Answer</h3>
                    <form className="QuizQuesCard_Ans--form">
                        <input type="text" className="QuizQuesCard_Ans--form-input" />
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