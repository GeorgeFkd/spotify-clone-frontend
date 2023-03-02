import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import songReducer from "./slices/songSlice";
import playlistReducer from "./slices/playlistsSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    currentSong: songReducer,
    playlists: playlistReducer,
  },
});
