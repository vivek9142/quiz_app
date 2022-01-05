import QuizStart from "../QuizStart/QuizStart.component";
import QuizQuesCard from "../QuizQuesCard/main/QuizQuesCard.component";
import QuizEndCard from "../QuizEndCard/QuizEndCard.component";
import './QuizCard.styles.scss';

const QuizCard = (props) => {
    return (
        <div className="quiz__card--container">
            <QuizStart/>
            <QuizQuesCard/>
            <QuizEndCard/>
        </div>
    )
}

export default QuizCard;