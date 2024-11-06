import React from 'react';

function ConfirmationScreen({ onSubmit }) {
  return (
    <div className="confirmation-screen">
      <p>Are you sure you want to submit the survey?</p>
      <button onClick={onSubmit}>Yes, Submit</button>
    </div>
  );
}

export default ConfirmationScreen;
