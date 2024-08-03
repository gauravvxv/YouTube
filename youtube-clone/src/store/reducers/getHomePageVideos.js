import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const API_KEY  = process.env.API_KEY_OF_YOUTUBE;


export const getHomePageVideo = createAsyncThunk(
    "youtube/app/homePageVideos",
    async(isNext,{getState})=>{
    const {youtubeApp: {nextPageToken: nextPageTokenFromState,videos}} = getState();

   const response =  await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="MrBeast"&key=${API_KEY}&part=snippet&type=video`);
        console.log(response.data)
 
    }

)