import './QuizQuesCard_Topic.styles.scss';

const QuizQuesCard_Topic = (props) =>{
    return(
        <div className="quizQuesCard__topic--container">
                        <div className="quizQuesCard__topic">
                            <h3 className="quizQuesCard__topic--heading">Topic</h3>
                            <h3 className="quizQuesCard__topic--sub-heading">Product Management</h3>
                        </div>

                        <div className="quizQuesCard__timeCounter">
                            <div className="quizQuesCard__timeCounter--min">
                                <span>00</span>
                                <span>min</span>
                            </div>

                            <div className="quizQuesCard__timeCounter--sec">
                                <span>00</span>
                                <span>sec</span>
                            </div>
                        </div>
                    </div>
    );
};

export default QuizQuesCard_Topic;