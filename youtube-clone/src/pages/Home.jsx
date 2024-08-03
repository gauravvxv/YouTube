import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { useDispatch,useSelector } from 'react-redux'
import { getHomePageVideo } from '../store/reducers/getHomePageVideos'
const Home = () => {
  const dispatch = useDispatch();
  const video = useSelector((state)=>state.youtubeApp.videos);

useEffect(()=>{
  dispatch(getHomePageVideo(false))
},[dispatch])  

  return (
    <div>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default Home
