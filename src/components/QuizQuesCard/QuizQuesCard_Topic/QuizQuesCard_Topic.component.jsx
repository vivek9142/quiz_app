import Timer from '../../Timer/Timer.component';
import './QuizQuesCard_Topic.styles.scss';

const QuizQuesCard_Topic = ({topic}) =>{   
     
    return(
        <div className="quizQuesCard__topic--container">
            <div className="quizQuesCard__topic">
                <h3 className="quizQuesCard__topic--heading">Topic</h3>
                <h3 className="quizQuesCard__topic--sub-heading">{topic}</h3>
            </div>
            
            <Timer/>
        </div>
    );
};

export default QuizQuesCard_Topic;