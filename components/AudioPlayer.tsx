import React, { useEffect } from "react";


const AudioPlayer = () => {
  useEffect(() => {
    const audio = new Audio('/Buddha Bar Lounge - Dub Marley.mp3');
    audio.autoplay = true;
    audio.loop = true;
    audio.play().catch((error) => {
      console.log(error)
    });
  }, []);

  return <></>;
};

export default AudioPlayer;
