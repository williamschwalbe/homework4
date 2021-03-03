import React, { useState } from 'react'

const NewPost = props => {
  const { addPost } = props
  const { parentsName } = props
  const [nameInput, setNameInput] = useState('')
  const [postInput, setPostInput] = useState(parentsName)
  const addToMessageBoard = () => {
    if (nameInput && postInput) {
      addPost({ name: nameInput, post: postInput })
      setNameInput('')
      setPostInput('')
    }
  }
  return (
    <div className="card">
      <div className="card-body justify-content-center">
        <input className="input-sm" type="text" value={nameInput} onChange={e => setNameInput(e.target.value)} placeholder="name" />
        <br />
        <textarea className="input" type="textarea" value={postInput} onChange={e => setPostInput(e.target.value)} placeholder="post" style={{ height: '100px' }} />
        <br />
        <button type="submit" onClick={addToMessageBoard} className="row btn btn-primary"> Submit</button>
      </div>
    </div>
  )
}
export default NewPost
