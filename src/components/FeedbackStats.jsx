import React from 'react'

function FeedbackStats({feedback}) {
    let average = feedback.reduce((acc, cur) => {
            return acc + cur.rating
    }, 0) / feedback.length
/* 
This function is using reduce to loop through all the ratings and then adds them
then ,0 is setting the default rating to 0. then we devide that by its length to 
get the average rating 
*/

    average = average.toFixed(1).replace(/[.,]0$/, '')
    /*
    This makes sure that there are no more than one decimal after the rating
    and . replace makes sure theres no zero if its a whole number
     */

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats