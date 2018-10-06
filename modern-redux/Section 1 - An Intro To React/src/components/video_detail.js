import React from 'react'

const VideoDetail = ({ video }) => {
  if(!video) return <div className="loading">Loading ...</div>

  const videoId = video.id.videoId,
        url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="">
      <div className="embed-resposive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    </div>
  )
}

export default VideoDetail
