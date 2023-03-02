import { createSlice } from "@reduxjs/toolkit";

export const currentSongSlice = createSlice({
  name: "current song",
  initialState: {
    playing: "false",
    name: "Never Too Late",
    artist: "Three days Grace",
    duration: "3:45",
    imgSrc:
      "https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/664511/original/resize:600x852/crop:x0y118w352h264/aspect:1.0/hash:1466628899/304451261d71aafa901rh5_1265444712.jpg?1466628899",
  },
  reducers: {
    pause: (state) => {
      return { ...state, playing: false };
    },
    play: (state) => {
      return { ...state, playing: true };
    },
  },
});

export const { pause, play } = currentSongSlice.actions;
export default currentSongSlice.reducer;
