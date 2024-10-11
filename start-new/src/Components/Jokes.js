import React from "react"

/*
Challenge: turn the strings in the array into <h3> elements instead
*/

export default function Jokes({setup, punchline}) {
  return (
    <div>
      <h3>
          setup: {setup}
      </h3>
      <p className="para" style={margin : "20px"}>
        punchline : {punchline}
      </p>
  </div>

  )
}


