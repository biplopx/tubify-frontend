import axios from "axios";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading/Loading";
const AddArtist = () => {
    const [ArtistLoading, setArtistLoading] = useState(false);
    const [profile, setProfile] = useState("");
    const [cover, setCover] = useState("");
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
        const imageCover = data.cover[0];
        const imgProfile = data.profile[0]
        if (imageCover && imgProfile) {
            const imageStorageKey = "25f8fd66fcd0b291d11ff45ad0f16374";
            const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
            const formData = new FormData();
            formData.append("image", imgProfile);
            setArtistLoading(true);
            axios.post(url, formData).then((res) => {
                if (res.data.success) {
                    const profileUrl = res.data.data.url;
                    setProfile(profileUrl);
                    const fromData2 = new FormData();
                    fromData2.append("image", imageCover);
                    axios.post(url, fromData2).then((res) => {
                        if (res.data.success) {
                            const coverUrl = res.data.data.url;
                            setCover(coverUrl);
                            const artistData = {
                                artistBio: data.bio,
                                artistName: data.name,
                                artistProfile: profile,
                                artistCover: cover,
                            };
                            fetch("https://tubifybd.herokuapp.com/artist/new-artist", {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json",
                                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                                },
                                body: JSON.stringify(artistData),
                            })
                                .then((res) => res.json())
                                .then((result) => {
                                    if (result.message === 'artist created') {
                                        setArtistLoading(false);
                                        toast.success("successfully added artist");
                                        reset();
                                    }
                                    else if (result.message === "artist already exists") {
                                        toast.error('already added artist');
                                        setArtistLoading(false);
                                    }
                                });

                        }
                    })
                }
            })
        }
    }
    if (ArtistLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="max-w-4xl w-full mx-auto my-5 secondary-bg px-4 py-6 rounded-md">
                <h2 className="text-2xl signika mb-4">Add artist</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="transparent">
                    {/* artist  Name */}
                    <div className="mb-4">
                        <label className="block mb-4">Artist Name</label>
                        <input
                            type="text"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Please enter artist name",
                                },
                            })}
                            className="w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1"
                            placeholder="Enter Song Name"
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
                    {/* artist bio*/}
                    <div className="mb-4">
                        <label className="block mb-4">artist bio</label>
                        <input
                            type="text"
                            {...register("bio", {
                                required: {
                                    value: true,
                                    message: "Please artist bio",
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
                        <label className="block">
                            <span className="sr-only">Choose File</span>
                            <input
                                type="file"
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer"
                                accept="image/png"
                                {...register("cover", {
                                    required: {
                                        value: true,
                                        message: "Please upload artist cover image",
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
                    {/* artist profile Image Input */}
                    <div className="mb-4">
                        <label className="block mb-4">profile Image</label>
                        <label className="block">
                            <span className="sr-only">Choose File</span>
                            <input
                                type="file"
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer"
                                accept="image/png"
                                {...register("profile", {
                                    required: {
                                        value: true,
                                        message: "Please upload artist profile image",
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
                    {/* Submit Button */}
                    <input
                        className="bg-sky-500 text-white px-3 py-2 w-full rounded-md hover:bg-sky-600 transition duration-300"
                        type="submit"
                        value="Add artist"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddArtist;