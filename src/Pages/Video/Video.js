import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";
import "/node_modules/video-react/dist/video-react.css";
import { BigPlayButton, ControlBar, ForwardControl, PlaybackRateMenuButton, Player, ReplayControl } from "video-react";

const Video = () => {
  const { id } = useParams();
  const { isLoading, data: video } = useQuery(["video"], () =>
    fetch(`http://localhost:5000/video/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  const { title, description, thumbnail, videoSrc } = video;
  console.log(videoSrc);
  return (
    <div className="w-full">
      <div className="max-w-[768px] mx-auto">
        <Player
          fluid={true}
          autoPlay={true}
          poster={thumbnail}
          src={videoSrc}
          className="mx-auto">
          <BigPlayButton position="center" />
          <ControlBar autoHide={false}>
            <ReplayControl seconds={5} order={2.1} />
            <ForwardControl seconds={5} order={3.1} />
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
          </ControlBar>
        </Player>
        <div className="my-3">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div className="my-3 text-sm">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
