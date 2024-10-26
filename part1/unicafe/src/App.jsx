import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({onClickHandler, text}) => {
  return (
    <button onClick={onClickHandler}>
      {text}
    </button>
  )
}

const Statistics = ({feedback}) => {
  return (
    <div>
      <div>good {feedback.good}</div>
      <div>neutral {feedback.neutral}</div>
      <div>bad {feedback.bad}</div>
    </div>
  )
}

const App = () => {

  const [feedback, setFeedback] = useState({good: 0, neutral: 0, bad: 0})

  const onClickGood = () => {
    return (
      setFeedback({
        ...feedback,
        good: feedback.good + 1
      })
    )
  }
  
  const onClickNeutral = () => {
    return (
      setFeedback({
        ...feedback,
        neutral: feedback.neutral + 1
      })
    )
  }
  
  const onClickBad = () => {
    return (
      setFeedback({
        ...feedback,
        bad: feedback.bad + 1
      })
    )
  }


  return (
    <div>
      <Header text={'give feedfack'} />
      <Button onClickHandler={onClickGood} text={'good'}/>
      <Button onClickHandler={onClickNeutral} text={'neutral'}/>
      <Button onClickHandler={onClickBad} text={'bad'}/>
      <Header text={'statistics'} />
      <Statistics feedback={feedback} />
    </div>
  )

}

export default App