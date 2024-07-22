import { useState, useRef } from "react";
import IconPlay from "../../icons/Play.astro";
import IconPause from "../../icons/Pause.astro";
import Loader from "../../icons/Loader.astro";

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);
  const streamUrl =
    "https://stream-150.zeno.fm/qgpgqixx3v8uv?zs=_zu_Dzi3RZuosKsYCsIYiQ";

  const handlePlay = () => {
    setIsLoading(true);
    audioRef.current.src = streamUrl;
    audioRef.current.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const handlePlaying = () => {
    setIsLoading(false);
    setIsPlaying(true);
  };

  return (
    <div className="flex items-center gap-4">
      <span className="animate-pulse">Estamos en Vivo...</span>
      <audio
        className="hidden"
        ref={audioRef}
        onPlaying={handlePlaying}
        controls
      >
        <source src="" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div>
        <div
          id="loader"
          className={`bg-zinc-800 size-12 rounded-full items-center justify-center focus:scale-95 ${
            isLoading ? "flex" : "hidden"
          }`}
        >
          <svg className="size-6" viewBox="0 0 24 24">
            <g stroke="currentColor">
              <circle
                cx="12"
                cy="12"
                r="9.5"
                fill="none"
                strokeLinecap="round"
                strokeWidth="3"
              >
                <animate
                  attributeName="stroke-dasharray"
                  calcMode="spline"
                  dur="1.5s"
                  keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                  keyTimes="0;0.475;0.95;1"
                  repeatCount="indefinite"
                  values="0 150;42 150;42 150;42 150"
                />
                <animate
                  attributeName="stroke-dashoffset"
                  calcMode="spline"
                  dur="1.5s"
                  keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                  keyTimes="0;0.475;0.95;1"
                  repeatCount="indefinite"
                  values="0;-16;-59;-59"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                dur="2s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              />
            </g>
          </svg>
        </div>
        <button
          type="button"
          id="play"
          className={`relative bg-zinc-800 size-12 rounded-full flex items-center justify-center focus:scale-95 ${
            isPlaying || isLoading ? "hidden" : "flex"
          } before:absolute before:inset-0 before:bg-zinc-800 before:rounded-full before:animate-ping before:-z-10 before:m-1`}
          onClick={handlePlay}
        >
          <svg className="size-6" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032z"
            />
          </svg>
        </button>
        <button
          type="button"
          id="pause"
          className={`bg-zinc-800 size-12 rounded-full items-center justify-center focus:scale-95 ${
            isPlaying ? "flex" : "hidden"
          }`}
          onClick={handlePause}
        >
          <svg className="size-6" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              d="M6 18.4V5.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6Zm8 0V5.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6h-2.8a.6.6 0 0 1-.6-.6Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RadioPlayer;
