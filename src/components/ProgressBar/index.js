import React from 'react'
import { Progress } from 'reactstrap'

const ProgressBar = ({ wrongLetters }) => {
  return (
    <div>
      <h3 className='text-center'>{10 - wrongLetters.length}</h3>
      <Progress color={wrongLetters.length > 7 ? "danger" : wrongLetters.length > 5 ? "warning" : "success"} value={100 - (wrongLetters.length * 10)} />
    </div>
  )
}

export default ProgressBar