import React, { useState } from 'react'

const Voter = () => {
  const [voteCount, setVoteCount] = useState(0)
  return (
    <div className="btn-group-vertical">
      <button type="button" onClick={() => setVoteCount(voteCount + 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0.708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
        </svg>
      </button>
      {voteCount}
      <button type="button" onClick={() => setVoteCount(voteCount - 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
        </svg>
      </button>
    </div>


    // <div className="container">
    //     <div className="row">
    //       <button type="button" onClick={() => setVoteCount(voteCount + 1)}>
    //         <i className="bi bi-arrow-up"/>
    //       </button>
    //     </div>
    //     <div className="row"> 
    //       {voteCount}
    //     </div>
    //     <div className="row">
    //       <button type="button" onClick={() => setVoteCount(voteCount - 1)}>
    //         <i className="bi bi-arrow-down"/>
    //       </button>

    //     </div>
    // </div>
  )
}
export default Voter
