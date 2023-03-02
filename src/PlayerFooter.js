import React, { useEffect, useState } from "react";
import "./PlayerFooter.css";
import Avatar from "@material-ui/core/Avatar";
import FavoriteOutlineIcon from "@material-ui/icons/FavoriteBorder";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { PauseCircleFilled } from "@material-ui/icons";
import LoopIcon from "@material-ui/icons/Loop";
import LinearProgress from "@material-ui/core/LinearProgress";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import DevicesIcon from "@material-ui/icons/Devices";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import { useDispatch, useSelector } from "react-redux";
import { pause, play } from "./redux/slices/songSlice";

function PlayerFooter() {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(20);
  const [volume, setVolume] = useState(20);
  const currentSong = useSelector((state) => state.currentSong);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (currentSong.playing) return dispatch(pause());
    return dispatch(play());
  };
  //   this needs some work to generalise properly
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }

        return Math.min(oldProgress + 10 / duration, 100);
      });
    }, 1 * 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="playerfooter">
      <div className="playerfooter__left">
        <Avatar
          className="playerfooter__song__image"
          variant="square"
          src={currentSong.imgSrc}
        />
        <div className="playerfooter__current__song">
          <p>{currentSong.name}</p>
          <span>{currentSong.artist}</span>
        </div>
        <FavoriteOutlineIcon />
      </div>
      <div className="playerfooter__center">
        <div className="playerfooter__center__controls">
          <ShuffleIcon />
          <SkipPreviousIcon />
          {currentSong.playing ? (
            <PlayCircleOutlineIcon
              className="mainControl"
              onClick={handleClick}
            />
          ) : (
            <PauseCircleFilled className="mainControl" onClick={handleClick} />
          )}
          <SkipNextIcon />
          <LoopIcon />
        </div>
        {/* this will be minutes and seconds with a usestate */}
        <div className="playerfooter__center__progressbar">
          <p>{0.15}</p>
          <div className="progressbar">
            <LinearProgress
              className="progr"
              variant="determinate"
              value={progress}
            />
          </div>

          <p>{currentSong.duration}</p>
        </div>
      </div>

      <div className="playerfooter__right">
        <PlaylistPlayIcon />
        <DevicesIcon />
        <VolumeDownIcon />

        <LinearProgress
          className="VolumeBar"
          variant="determinate"
          value={volume}
        />
      </div>
    </div>
  );
}

export default PlayerFooter;
