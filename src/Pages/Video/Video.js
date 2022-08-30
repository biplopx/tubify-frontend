import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";
import "/node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";

const Video = () => {
  const { id } = useParams();
  const { isLoading, data: video } = useQuery(["video"], () =>
    fetch(`http://localhost:5000/video/${id}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  const { name, singer, videoSrc, cover } = video;
  console.log(videoSrc);
  return (
    <div className="singleVideo">
      <div className="video-container">
        <Player
          fluid={false}
          height={500}
          autoPlay={true}
          poster={cover}
          src='https://youtu.be/JRqAVqd2WuM'
          className="mx-auto"
        />
        <h2 className="ml-60 text-xl mt-3">{name}</h2>
        <h4 className="ml-60 text-xs">{singer}</h4>
      </div>
    </div>
  );
};

export default Video;
