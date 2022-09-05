import React, { useState } from 'react';
import './App.css';

export default function App() {

  const questions=[
    {
      questionText: "Who is the founder of PUBG?",
      answerOption:[
          {answerText: "Elon Musk" , isCorrect:false},
          {answerText:"David Jones" , isCorrect:false},
          {answerText:"Brendan Greene" , isCorrect : true},
          {answerText:"Greene Mike" , isCorrect:false}
      ],
    },
    {
      questionText:"Who is the CEO of Tesla?",
      answerOption:[
          {answerText:"Jeff Bozos" , isCorrect:false},
          {answerText:"Tony Stark" , isCorrect:false},
          {answerText:"Mukesh Ambani" , isCorrect:false},
          {answerText:"Elon Musk" , isCorrect:true}
      ],
    },
    {
      questionText:"Who is PUBG pro player in shield squard?",
      answerOption:[
        {answerText:"Ahamed Bhai" , isCorrect:false},
        {answerText:"Farhan khan" , isCorrect:false},
        {answerText:"Nk Pysco" , isCorrect:false},
        {answerText:"All are Noob" , isCorrect:true}
      ],
    },
    {
      questionText:"Who is founder of Javascript",
      answerOption:[
        {answerText:"Bill Gates" , isCorrect:false},
        {answerText:"Brendan Eich" , isCorrect:true},
        {answerText:"Syed Farhan" , isCorrect:false},
        {answerText:"FaceBook" , isCorrect:false}
      ],
    },
    {
      questionText:"Who is best Crickter in India?",
      answerOption:[
        {answerText:"Ms Dhoni" , isCorrect:false},
        {answerText:"Virat Kholi",isCorrect:true},
        {answerText:"Hardik Pandy",isCorrect:false},
        {answerText:"David miller",isCorrect:false}
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0)
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  return (
    <>
      <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOption.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
    </>
  );
}


