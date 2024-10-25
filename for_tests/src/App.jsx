import { useState } from 'react'

const Display = ({counter}) => {
  return (
    <div>
      {counter}
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    // console.log('before', left)
    setLeft(left + 1)
    setTotal(total + 1)
    // console.log('after', left, '\n')
  }
  
  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(total + 1)
  }
  // console.log("here")
  
  
  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />      
      <Button handleClick={handleRightClick} text='right' />      
      {right}
      <History allClicks={allClicks}/>
      <p>total {total}</p>
    </div>
  )
}

export default App
