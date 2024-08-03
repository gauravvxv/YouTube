import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideo } from "../../store/reducers/getHomePageVideos";

const initialState = {
    video: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPage: null,
    recommendVideo: [],
}

const youtubeSlice = createSlice({
    name: "youtubeApp",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getHomePageVideo.fulfilled,(state,action)=>{
             
        })
    }
})

export default youtubeSlice.reducer