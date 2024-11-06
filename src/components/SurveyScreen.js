import React, { useState } from 'react';

function SurveyScreen({ questions, questionIndex, onNext, onPrevious, onSkip, onViewResponses }) {
  const [response, setResponse] = useState(null); // Use null initially for no selection
  const currentQuestion = questions[questionIndex];

  const handleResponseChange = (rating) => setResponse(rating); // Set the selected rating

  const handleNext = () => {
    onNext(response);
    setResponse(null); // Clear the response after saving
  };

  return (
    <div className="survey-screen">
      <h2>Customer Survey {questionIndex + 1}/{questions.length}</h2>
      <p>{currentQuestion.text}</p>
      {currentQuestion.type === 'rating' ? (
        <div className="rating-buttons">
          {/* Dynamically render rating buttons based on the scale */}
          {Array.from({ length: currentQuestion.scale }, (_, i) => (
            <button
              key={i + 1}
              className={`rating-btn rating-btn-${i + 1} ${response === i + 1 ? 'selected' : ''}`}
              onClick={() => handleResponseChange(i + 1)} // Set response when clicked
            >
              {i + 1}
            </button>
          ))}
        </div>
      ) : (
        <textarea value={response} onChange={(e) => setResponse(e.target.value)} />
      )}
      <div className="button-group">
        {questionIndex > 0 && <button onClick={onPrevious}>Previous</button>}
        <button onClick={handleNext}>Next</button>
        <button onClick={onSkip}>Skip</button>
      </div>
      <button onClick={onViewResponses}>View Saved Responses</button>
    </div>
  );
}

export default SurveyScreen;
