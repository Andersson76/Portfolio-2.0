import React, { useEffect } from "react";

const AudioPlayer = () => {
  useEffect(() => {
    const audio = new Audio("/subway-ride.mp3");
    audio.loop = true;
    audio.play();
  }, []);

  return <></>;
};

export default AudioPlayer;
