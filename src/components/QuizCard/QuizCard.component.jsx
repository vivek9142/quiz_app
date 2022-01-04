import QuizQuesCard from "../QuizQuesCard/main/QuizQuesCard.component";
import QuizStart from "../QuizStart/QuizStart.component";
import './QuizCard.styles.scss';

const QuizCard = (props) => {
    return (
        <div className="quiz__card--container">
            <QuizStart/>
            <QuizQuesCard/>
        </div>
    )
}

export default QuizCard;