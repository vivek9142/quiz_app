import QuizStart from "../QuizStart/QuizStart.component";
import './QuizCard.styles.scss';

const QuizCard = (props) => {
    return (
        <div className="quiz__card--container">
            <QuizStart/>
        </div>
    )
}

export default QuizCard;