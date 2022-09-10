import React, { useContext } from "react";
import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  // calculate ratings avg
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  // ornegin 9.0 durmasını istemezsek regex kullandık
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Avarage Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.prototype = {
  feedback: PropTypes.array.isRequired,
};
export default FeedbackStats;
