import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";
import { BiLogoImdb } from "react-icons/bi";
import tmdb from "../hooks/tmdb";
import { dateFormat } from "../helpers/helpers";

const Detail = () => {
  const { id, type } = useParams();

  const { detail } = tmdb();
  const [data, setData] = useState({});

  useEffect(() => {
    async function getDetail() {
      const data = await detail(id, type);
      console.log(data);
      setData(data);
    }
    getDetail();
  }, [type, id]);
  const title = type == "tv" ? data.name : data.title;
  const rating = data.vote_average?.toFixed(2);
  const imgSrc = `https://www.themoviedb.org/t/p/w780${data.poster_path}`;

  const fomattedDate =
    type == "tv"
      ? dateFormat(data?.first_air_date)
      : type == "movie"
      ? dateFormat(data?.release_date)
      : "";

  const genres = [
    "Action",
    "Animation",
    "Comedy",
    "Crime",
    "Fantasy",
    "Historical",
    "Horror",
  ];
  const casts = [
    "Cillian Murphy",
    "J. Robert Oppenheimer",
    "Emily Blunt",
    "Emily Blunt",
    "Kitty Oppenheimer",
    "Matt Damon",
    "Matt Damon",
    "Leslie Groves",
    "Robert Downey Jr.",
    "Robert Downey Jr.",
    "Lewis Strauss",
    "Gregory Jbara",
    "Chairman Magnuson",
    "Ted King",
    "Steven Houska",
    "Senator Scott",
  ];

  const gerneCss = {
    marginRight: "10px",
    wordBreak: "normal",
    overflowWrap: "break-word",
    padding: "5px 10px",
    display: "inline-block",
    marginTop: "10px",
    borderRadius: "10px",
    border: "1px solid white",
    backgroundColor: "white",
    color: "black",
    fontWeight: "500",
  };
  const castCss = {
    marginRight: "10px",
    wordBreak: "normal",
    overflowWrap: "break-word",
    padding: "5px 10px",
    display: "inline-block",
    marginTop: "10px",
    borderRadius: "10px",
    border: "1px solid white",
    backgroundColor: "transparent",
    fontWeight: "500",
  };
  return (
    <div className="grid grid-cols-3 gap-10 p-4">
      <div className="col-span-3 md:col-span-1 text-center">
        <img className="w-full rounded-3xl" src={imgSrc} alt="" />
      </div>
      <div className="col-span-3 md:col-span-2">
        <h1 className="text-6xl">{title}</h1>
        <p className="py-10 text-3xl text-gray-500">{data.tagline}</p>
        <h2 className="text-3xl font-bold flex flex-row gap-10">
          <span className="text-6xl">{rating}</span>{" "}
          <span className="flex flex-row gap-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </span>
        </h2>
        <div className="grid grid-cols-4 pb-10">
          {type == "tv" && (
            <>
              <div className="pt-10 col-span-2 md:col-span-1">
                <p className="mb-4 text-gray-500 text-3xl font-bold">
                  No. of Seasons
                </p>
                <p className="mb-4 text-3xl font-medium">
                  {data.number_of_seasons}
                </p>
              </div>
              <div className="pt-10 col-span-2 md:col-span-1">
                <p className="mb-4 text-gray-500 text-3xl font-bold">
                  No. of Episodes
                </p>
                <p className="mb-4 text-3xl font-medium">
                  {data.number_of_episodes}
                </p>
              </div>
            </>
          )}
          {type == "movie" && (
            <div className="pt-10 col-span-2 md:col-span-1">
              <p className="mb-4 text-gray-500 text-3xl font-bold">Budget</p>
              <p className="mb-4 text-3xl font-medium">{data.budget}</p>
            </div>
          )}
          <div className="pt-10 col-span-2 md:col-span-1">
            <p className="mb-4 text-gray-500 text-3xl font-bold">Language</p>
            <p className="mb-4 text-3xl font-medium">
              {data.original_language?.toUpperCase()}
            </p>
          </div>
          <div className="pt-10 col-span-2 md:col-span-1">
            <p className="mb-4 text-gray-500 text-3xl font-bold">Year</p>
            <p className="mb-4 text-3xl font-medium">{fomattedDate}</p>
          </div>
          <div className="pt-10 col-span-2 md:col-span-1">
            <p className="mb-4 text-gray-500 text-3xl font-bold">Status</p>
            <p className="mb-4 text-3xl font-medium">{data.status}</p>
          </div>
        </div>
        <h2 className="text-3xl">Gerne</h2>
        <div>
          {data.genres?.map((genre) => (
            <div key={genre.id} style={gerneCss}>
              {genre.name}
            </div>
          ))}
        </div>
        <h2 className="text-3xl mt-10">Synopsis</h2>
        <p className="pt-3 text-3xl">{data.overview}</p>
        <h2 className="text-3xl mt-10">Production Companies</h2>
        <div>
          {data.production_companies?.map((company) => (
            <div key={company.id} style={castCss}>
              {company.name}
            </div>
          ))}
        </div>
        <div className="flex flex-row">
          <a href={data.homepage} target="_blank" rel="noopener noreferrer">
            <div className="pr-10 py-10">
              <button className="bg-[#5a698f] rounded-xl flex flex-row gap-10 px-10 py-5 text-3xl items-center font-medium">
                Website <LuLink />
              </button>
            </div>
          </a>
          <div className="pr-10 py-10">
            <button className="bg-[#5a698f] rounded-xl flex flex-row gap-10 px-10 py-5 text-3xl items-center font-medium">
              IMDB <BiLogoImdb />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
