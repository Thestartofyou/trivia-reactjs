import React from 'react'
import {QuizData} from './QuizData'; 

 class Quiz extends React.Component {
    state = { 
userAnswer:null, 
currentQuestion: 0, 
options: []
    }  
    loadQuiz = () => { 
        const {currentQuestion} = this.state;
        this.setState(() => { 
            return { 
                questions:QuizData[currentQuestion].question,
                options: QuizData[currentQuestion].options,
                answers: QuizData[currentQuestion].answer
            }
        })
    } 
    componentDidMount() { 
        this.loadQuiz();
    }
    render(){ 
        return (
            <div className="App">
                {this.state.currentQuestion}
            </div>
        )
    }

    }
         
    export default Quiz;
