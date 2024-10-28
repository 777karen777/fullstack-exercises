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

const StatisticLine = ({text, value}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value} </td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = ({feedback}) => {
  const all = feedback.good + feedback.neutral + feedback.bad
  const positive = (feedback.good / (all / 100)).toString() + " %"
  const average = (feedback.good - feedback.bad) / all

  if(all === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <div>
      <StatisticLine text={'good'} value={feedback.good}/>
      <StatisticLine text={'neutral'} value={feedback.neutral}/>
      <StatisticLine text={'bad'} value={feedback.bad}/>
      <StatisticLine text={'all'} value={all}/>
      <StatisticLine text={'average'} value={average}/>
      <StatisticLine text={'positive'} value={positive}/>
    </div>
  )
}

const App = () => {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

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