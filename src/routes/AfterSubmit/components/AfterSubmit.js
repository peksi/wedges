import React from 'react'

export class AfterSubmit extends React.Component {
  render () {
    return (
      <div>
        <h1>Thank you for participating.</h1>
        <p style={{'padding-top':'10em', 'text-align':'center'}}>The solution to the Milk Man puzzle: &nbsp;
          <a href="https://www.youtube.com/watch?v=bqJeN95Ab4Q">
            www.youtube.com/watch?v=bqJeN95Ab4Q</a>
        </p>
      </div>
    )
  }
}

export default AfterSubmit
