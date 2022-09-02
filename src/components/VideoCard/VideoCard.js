import { Link } from "react-router-dom";

const VideoCard = ({ video, singleUser, fetchSingleUser }) => {
  const { _id, title, thumbnail, contentType } = video;

  return (
    <div className="secondary-bg p-3 rounded-md relative">
      {/* Card Image */}
      <Link to={`/dashboard/video/${_id}`} className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="rounded object-cover h-52 w-full"
        />
        <i className="ri-play-fill text-2xl w-10 h-10 rounded-full text-white bg-sky-500 absolute right-3 bottom-4 flex justify-center items-center cursor-pointer"></i>
      </Link>
      {/* Content */}
      <div className="ml-1 mt-4">
        <div>
          <Link to={`/dashboard/video/${_id}`} className="text-md font-semibold mb-1">{title.slice(0, 50)}</Link>
        </div>
        <div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm">Content Type: {contentType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
