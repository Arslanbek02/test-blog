import React from 'react'
import { useParams } from 'react-router-dom'

const Post = (props) => {
  const params = useParams()
  
  return (
    <div>
      Post {params.id}
    </div>
  )
}

export default Post