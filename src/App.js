import React, { useState, useEffect } from 'react';
import questions from './questions';
import WelcomeScreen from './components/WelcomeScreen';
import SurveyScreen from './components/SurveyScreen';
import ConfirmationScreen from './components/ConfirmationScreen';
import ThankYouScreen from './components/ThankYouScreen';
import ResponsesScreen from './components/ResponsesScreen';
import './styles.css';


function App() {
  const [screen, setScreen] = useState('welcome');
  const [responses, setResponses] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleStart = () => setScreen('survey');

  const handleNext = (response) => {
    const updatedResponses = { ...responses, [questions[questionIndex].id]: response };
    setResponses(updatedResponses);
    localStorage.setItem('responses', JSON.stringify(updatedResponses));

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setScreen('confirmation'); // Go to confirmation screen after the last question
    }
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const handleSkip = () => {
    const updatedResponses = { ...responses, [questions[questionIndex].id]: '' };
    setResponses(updatedResponses);
    localStorage.setItem('responses', JSON.stringify(updatedResponses));

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setScreen('confirmation');
    }
  };

  const handleSubmit = () => {
    // Set COMPLETED flag and show ThankYouScreen
    localStorage.setItem('surveyStatus', 'COMPLETED');
    setScreen('thankYou');
  };

  // Redirect back to welcome screen after 5 seconds on ThankYouScreen
  useEffect(() => {
    if (screen === 'thankYou') {
      const timer = setTimeout(() => {
        setScreen('welcome');
        setResponses({});
        setQuestionIndex(0);
        localStorage.removeItem('responses'); // Optional: clear responses if needed
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timeout if component unmounts
    }
  }, [screen]);

  useEffect(() => {
    const savedResponses = JSON.parse(localStorage.getItem('responses'));
    if (savedResponses) {
      setResponses(savedResponses);
    }
  }, []);

  const handleViewResponses = () => setScreen('responses');
  const handleGoBackToWelcome = () => setScreen('welcome');

  return (
    <div className="App">
      {screen === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {screen === 'survey' && (
        <SurveyScreen
          questions={questions}
          questionIndex={questionIndex}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSkip={handleSkip}
          onViewResponses={handleViewResponses}
        />
      )}
      {screen === 'confirmation' && (
        <ConfirmationScreen onSubmit={handleSubmit} />
      )}
      {screen === 'thankYou' && <ThankYouScreen />}
      {screen === 'responses' && (
        <div>
          <ResponsesScreen />
          <button onClick={handleGoBackToWelcome}>Back to Welcome</button>
        </div>
      )}
    </div>
  );
}

export default App;
