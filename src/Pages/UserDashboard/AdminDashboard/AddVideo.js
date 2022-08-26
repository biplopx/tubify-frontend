import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../../components/Loading/Loading";
import { toast } from "react-toastify";
import axios from "axios";

const AddVideo = () => {
  const [coverUploading, setCoverUploading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => {
    const coverImageExtension = data.cover[0].name.split(".").pop();
    const coverImageSize = ((data.cover[0].size / 1024 / 1024) * 1000).toFixed(
      0
    );
    if (coverImageExtension === "png" && coverImageSize < 1000) {
      const image = data.cover[0];
      if (image) {
        const imageStorageKey = "25f8fd66fcd0b291d11ff45ad0f16374";
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        const formData = new FormData();
        formData.append("image", image);
        setCoverUploading(true);
        axios.post(url, formData).then((res) => {
          if (res.data.success) {
            const photoUrl = res.data.data.url;
            setCoverUploading(false);

            const videoData = {
              ...data,
              cover: photoUrl,
            };

            fetch("http://localhost:5000/video/add-video", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(videoData),
            })
              .then((res) => res.json())
              .then((result) => {
                if (result.status === "successful") {
                  toast.success("Video successfully added");
                  reset();
                } else {
                  toast.error(result.error);
                }
              });
          }
        });
      }
    } else {
      toast.error("Cover image must be a png file and less than 1mb");
    }
  };

  if (coverUploading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="max-w-4xl w-full mx-auto my-5 secondary-bg px-4 py-6 rounded-md">
        <h2 className="text-2xl signika mb-4">Add Video</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="transparent">
          {/* Video Name */}
          <div className="mb-4">
            <label className="block mb-4">Video Name</label>
            <input
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "Please enter Video name",
                },
              })}
              className="w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter Video Name"
              required
            />
            <label className="block mt-2">
              {errors.name?.type === "required" && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          {/* Singer Input */}
          <div className="mb-4">
            <label className="block mb-4">Singer Name</label>
            <input
              type="text"
              {...register("singer", {
                required: {
                  value: true,
                  message: "Please singer name",
                },
              })}
              className="w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter Singer Name"
              required
            />
            <label className="block mt-2">
              {errors.singer?.type === "required" && (
                <span className="text-sm text-red-500">
                  {errors.singer.message}
                </span>
              )}
            </label>
          </div>
          {/* Cover Image Input */}
          <div className="mb-4">
            <label className="block mb-4">Cover Image</label>
            <label class="block">
              <span class="sr-only">Choose Cover Image</span>
              <input
                type="file"
                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer"
                accept="image/png"
                {...register("cover", {
                  required: {
                    value: true,
                    message: "Please upload cover image",
                  },
                })}
              />
            </label>
            <label className="block mt-2">
              {errors.cover?.type === "required" && (
                <span className="text-sm text-red-500">
                  {errors.cover.message}
                </span>
              )}
            </label>
          </div>

          {/* video Source Input */}
          <div className="mb-4">
            <label className="block mb-4">Video</label>
            {/* <label class="block">
              <span class="sr-only">Choose VIdeo</span>
              <input
                type="file"
                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer"
                accept="image/png"
                {...register("videoSrc", {
                    required: {
                      value: true,
                      message: "Please upload video",
                    },
                  })}
              />
            </label> */}

            <input
              type="url"
              {...register("videoSrc", {
                required: {
                  value: true,
                  message: "Please Video URL",
                },
              })}
              className="w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter Video URL"
              required
            />

            <label className="block mt-2">
              {errors.videoSrc?.type === "required" && (
                <span className="text-sm text-red-500">
                  {errors.videoSrc.message}
                </span>
              )}
            </label>
          </div>
          {/* Lyrics Input */}
          <div className="mb-4">
            <label className="block mb-4">Lyrics</label>
            <textarea
              type="text"
              row="5"
              {...register("lyrics")}
              className="w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter Lyrics"
            ></textarea>
          </div>
          {/* Album Input */}
          <div className="mb-4">
            <label className="block mb-4">Album Name</label>
            <input
              type="text"
              {...register("album")}
              className="w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter Album Name"
            />
          </div>
          {/* Language Input */}
          <div className="mb-4">
            <label className="block mb-4">Language</label>
            <div className="flex">
              <div className="mb-3 w-full">
                <select
                  {...register("lang", {
                    required: {
                      value: true,
                      message: "Please select video language",
                    },
                  })}
                  className="form-select appearance-none
      block
      secondary-bg
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-300
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-300 focus:secondary-bg focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  defaultValue={"Hindi"}
                >
                  <option value="Hindi">Hindi</option>
                  <option value="Bangla">Bangla</option>
                  <option value="English">English</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <label className="block mt-2">
              {errors.lang?.type === "required" && (
                <span className="text-sm text-red-500">
                  {errors.lang.message}
                </span>
              )}
            </label>
          </div>

          {/* Type Input */}
          <div className="mb-4">
            <label className="block mb-4">Video Type</label>
            <div className="flex gap-x-5">
              <div>
                <input
                  type="radio"
                  value="free"
                  {...register("videoType", {
                    required: {
                      value: true,
                      message: "Please select video type",
                    },
                  })}
                  required
                />{" "}
                Free
              </div>
              <div>
                <input
                  type="radio"
                  value="paid"
                  {...register("videoType", {
                    required: {
                      value: true,
                      message: "Please Select video type",
                    },
                  })}
                  required
                />{" "}
                Paid
              </div>
            </div>

            <label className="block mt-2">
              {errors.videoType?.type === "required" && (
                <span className="text-sm text-red-500">
                  {errors.videoType.message}
                </span>
              )}
            </label>
          </div>

          {/* Submit Button */}
          <input
            className="bg-sky-500 text-white px-3 py-2 w-full rounded-md hover:bg-sky-600 transition duration-300"
            type="submit"
            value="Add Video"
          />
        </form>
      </div>
    </div>
  );
};

export default AddVideo;
