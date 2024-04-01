import { useState } from "react";
import { dbusers } from "./data.JS";

const WorkingWithApi = () => {
  const [gProfileuser] = useState(dbusers);
  const [searchQuery, setSearchQuery] = useState("");
  const [likedIndices, setLikedIndices] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLikeToggle = (index) => {
    if (likedIndices.includes(index)) {
      setLikedIndices(likedIndices.filter((i) => i !== index));
    } else {
      setLikedIndices([...likedIndices, index]);
    }
  };


  const handleUnlike = (indexToRemove) => {
    setLikedIndices((prevIndices) =>
      prevIndices.filter((index) => index !== indexToRemove)
    );
  };

  const filteredUsers = gProfileuser.filter((user) =>
    user.login.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search users"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="border border-gray-300 rounded-md px-3 py-1 mt-3 mb-2"
        />

        <p className="ml-[1rem]"> liked users: {likedIndices.length}</p>
      </div>

      {likedIndices.length > 0 && (
        <div className="mt-3 flex flex-wrap justify-center">
          <p className="flex items-center justify-center text-white mt-3 mr-[1rem]">
            LIKED:
          </p>
          {likedIndices.map((index) => (
            <div key={index} className="border rounded-lg w-[7.5rem] flex items-center mr-[1rem]">
              <p className="text-white px-[1rem]">{filteredUsers[index].login}</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
                onClick={() => handleUnlike(index)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-center items-center">
        {filteredUsers.map((item, index) => (
          <div key={index} className="flex flex-col w-[250px] h-[380px] ml-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={likedIndices.includes(index) ? "red" : "none"}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              onClick={() => handleLikeToggle(index)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>

            <img
              className="border-2 border-blue-500 rounded-3xl"
              src={item.avatar_url}
              alt={item.login}
            />
            <p className="text-3xl text-white">{item.login}</p>
            <a
              className="btn bg-blue-500 hover:bg-red-500"
              href={item.html_url}
              rel="noreferrer"
              target="_blank"
            >
              Visit My Profile
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkingWithApi;
