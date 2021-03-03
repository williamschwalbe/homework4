import React, { useState } from 'react'
import s from 'styled-components'
import NewPost from './NewPost'
import Voter from './Voter'

const Wrapper = s.div`
  border-top: 1px;
  border-bottom: 1px;
  border-left: 3px;
  border-right:3px;
`

const Reply = props => {
  const { name, post, depth } = props
  const [childrenList, setChildrenList] = useState([])
  const [openInputForm, setInputForm] = useState(false)
  const currentDepth = depth
  const addReply = reply => {
    setChildrenList([...childrenList, reply])
    setInputForm(!openInputForm)
  }
  if (depth === 0) {
    return (<div />)
  }
  return (
    <Wrapper className="row justify-content-center">
      <div className="col-8">
        <div className="card text-left " style={{ width: '50rem', overflow: 'auto' }}>
          <div className="card-body right">
            <p className="card-title">
              { name }
            </p>
            <p className="card-text">
              {post}
            </p>
          </div>
          <div className="card-footer">
            {(depth !== 1)
        && (
        <button type="button" onClick={() => setInputForm(!openInputForm)} className="btn btn-secondary " style={{ width: '10rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-reply" viewBox="0 0 16 16" style={{ verticalAlign: 'text-top' }}>
            <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
          </svg>
          Reply
        </button>
        )}
          </div>
        </div>
      </div>
      <div className="col-1">
        <Voter className="mr-auto" />
      </div>
      <div className="row text-center">
        {openInputForm && <NewPost addPost={addReply} parentsName={`@${name}`} />}
      </div>
      <div className="row">
        {childrenList.map(reply => (
          <Reply
            key={`${reply.name + reply.post + (currentDepth - 1)}`}
            depth={currentDepth - 1}
            name={reply.name}
            post={reply.post}
          />
        ))}
      </div>
    </Wrapper>
  )
}

export default Reply
