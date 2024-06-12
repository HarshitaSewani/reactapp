import React from 'react';
import "./Result.css";
import { Button } from '@mui/material';

const Results = ({ score }) => {
  // Function to get remark based on the score
  const getRemark = (score) => {
    if (score === 10) {
      return "Perfect score! You're a genius!";
    } else if (score >= 8) {
      return "Great job! You did really well!";
    } else if (score >= 5) {
      return "Good effort!";
    } else {
      return "Hard luck! But we see the potential..let's try again";
    }
  };

  return (
    <div className="result-container">
      <h2 className="result-score">Your Score: {score}/10</h2>
      <p className="result-remark">{getRemark(score)}</p>
      <div >
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
      </div>
    </div>
  );
};

export default Results;
