import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import auth from "../../firebase.init";
import useSingleUser from "../../Hooks/useSingleUser";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../../components/VideoCard/VideoCard";

const Videos = () => {
  const [user, loading] = useAuthState(auth);
  const [singleUser, singleUserRefetch] = useSingleUser(user?.email);

  const { isLoading, data: videos } = useQuery(["videos"], () =>
    fetch("http://localhost:5000/video/all-video", {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then((res) => res.json())
  );

  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recently Added</h2>
          <p className="text-normal">
            <Link to="/dashboard/all-video">View All</Link>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between">
          {videos?.slice(0, 8).map((video) => (
            <VideoCard
              key={video._id}
              video={video}
              singleUser={singleUser}
              fetchSingleUser={singleUserRefetch}
            ></VideoCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Videos;
