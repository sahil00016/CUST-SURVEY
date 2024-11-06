import React, { useEffect, useState } from 'react';

function ResponsesScreen() {
  const [savedResponses, setSavedResponses] = useState({});

  useEffect(() => {
    const responses = JSON.parse(localStorage.getItem('responses')) || {};
    setSavedResponses(responses);
  }, []);

  return (
    <div>
      <h2>Saved Responses</h2>
      <ul>
        {Object.keys(savedResponses).map((questionId) => (
          <li key={questionId}>
            Question ID {questionId}: {savedResponses[questionId]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResponsesScreen;
