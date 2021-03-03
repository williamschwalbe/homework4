import React, { useState } from 'react'
import NewPost from './NewPost'
import Reply from './Reply'

const App = () => {
  const [postList, setPostList] = useState([])
  const MAX_Depth = 3
  return (
    <div className="contatiner">
      <div className="row justify-content-center">
        <div className="card text-center" style={{ width: '100%', border: 'double' }}>
          <h1 className="card-title"> Submit A Post</h1>
          <NewPost addPost={p => setPostList([...postList, p])} parentsName="" />
        </div>
      </div>
      <div className="row justify-content-center">
        {(postList).map(
          newpost => <Reply key={`${newpost.name + newpost.post + (MAX_Depth)}`} depth={MAX_Depth} name={newpost.name} post={newpost.post} />,
        )}
      </div>
    </div>
  )
}
export default App
