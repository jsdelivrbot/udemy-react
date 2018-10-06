import React from 'react'

const VideoListItem = ({ video, handleSelectVideo }) => {
  const imageUrl = video.snippet.thumbnails.default.url

  return (
    <li className="list-group-item" onClick={() => handleSelectVideo(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} className="media-object"/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem
