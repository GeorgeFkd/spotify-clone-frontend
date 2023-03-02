import { createSlice } from "@reduxjs/toolkit";

export const playlistsSlice = createSlice({
  name: "user playlists",
  initialState: [
    {
      name: "chill",
      songs: [{}],
      info: {},
    },
  ],
  reducers: {
    removePlaylist: (state, action) => {
      return state.filter((playlist) => playlist.name !== action.payload);
    },
    createPlaylist: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { removePlaylist, createPlaylist } = playlistsSlice.actions;
export default playlistsSlice.reducer;
