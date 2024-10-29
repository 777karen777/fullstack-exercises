const Total = (props) => {
    const exercises = props.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <p>Number of exercises {exercises}</p>
    )
}

export default Total