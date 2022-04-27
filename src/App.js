import {useState} from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'

function App() {

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  /* 
  delete function is taking in the id of the feedback, using filter to remove
  the id from the item list. this is saying = item.id doesnt match an id, dont show. 
  */

  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header />
      <div className="container">
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} 
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  );
}

export default App;
