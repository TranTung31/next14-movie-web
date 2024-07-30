'use client'

import React from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

type VideoPlayerType = {
  url: string | string[]
  muted: boolean
  controls: boolean
  width: any
  height: any
}

const VideoPlayer: React.FC<VideoPlayerType> = ({ url, muted, controls, width, height }) => {
  return (
    <ReactPlayer
      url={url}
      playing={true}
      volume={1}
      loop={true}
      muted={muted}
      width={width}
      height={height}
      controls={controls}
      className="absolute top-0 left-0"
    />
  )
}

export default VideoPlayer