import React, { useEffect, useState } from 'react'
import { YOU_TUBE } from '../utils/constants';
import VideoCard from './videoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState();

  useEffect(() =>{
    getVideos();
  },[]);

  const getVideos = async () =>{
    const data = await fetch(YOU_TUBE);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  }

  return (
    <div className='flex flex-wrap'>
      {videos && videos.map(video => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer
