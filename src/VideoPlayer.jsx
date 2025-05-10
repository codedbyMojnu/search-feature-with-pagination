import { useEffect, useRef } from "react";

export default function VideoPlayer({ src, isPlaying }) {
  const refVideo = useRef();
  useEffect(() => {
    if (isPlaying) {
      refVideo.current.play();
    } else {
      refVideo.current.pause();
    }
  });
  return <video ref={refVideo} src={src} />;
}
