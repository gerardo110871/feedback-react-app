import React from 'react'

function Card({children, reverse}) {
  return (
    <div className={`card ${ reverse && 'reverse' }`}>{children}</div>
    )
}


Card.defaultProps = {
    reverse: false,
}

export default Card

//this is just a style component that is receiving the information
//from the feedbackItem component