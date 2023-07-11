import NavBar from "./Navbar";
import { useEffect, useState } from "react";
import { API_URL } from "../Constants";
import Shimmer from "./shimmer";

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState({});

  useEffect(() => {
    getPhoto();
    async function getPhoto() {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;

  return !photoData.url ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center p-12 sm:flex-wrap md:flex-wrap">
        <div>
          {photoData.media_type === "image" ? (
            <img
              src={photoData.url}
              alt={photoData.title}
              className="w-[400px] p-12 m-32 border-2 shadow-2xl shadow-white "
            />
          ) : (
            <iframe
              title="space video"
              src={photoData.url}
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
            />
          )}
        </div>
        <div className="w-96 m-5 p-2">
          <h1 className="m-5 text-center text-yellow-200 text-3xl font-semibold">
            {photoData.title}
          </h1>
          <p className="m-5 text-center font-medium text-yellow-500">
            {photoData.date}
          </p>
          <p className=" tracking-wide text-white">{photoData.explanation}</p>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default NasaPhoto;
