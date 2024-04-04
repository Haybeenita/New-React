const Body = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Body;









import { useEffect, useState } from "react";
import axios from "axios";

export const AxiosPageApi = () => {
  const [gitHubUsers, setGitHubUsers] = useState([]);
  const [gitError, setGitError] = useState("");
  const [eDeyLoad, setEDeyLoad] = useState(false);

  useEffect(() =>{
    getGitHubUsers()
  },[])



  const getGitHubUsers = () => {

    setEDeyLoad(true);
    setGitError("");

    axios
      .get("https://script.google.com/macros/s/AKfycbxH7_mJOYrn5IpyATacibMcOo9o859Pp5gIQbVZxJzw8NaE91F70BG6SXL_8h-Fd0iD/exec?sheetId=131gfsxKqzyOwrZIMw5cQ0ClhjbywTEx2mJ32Rwo1h_o&sheetName=Sheet1")
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        setGitHubUsers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log({error});
        console.log(error.response.status);
        console.log(error.response.data);
        setGitError(error.response.data.message);
      })
      .finally(function () {
        setEDeyLoad(false);
      });
  };


  return (
    <>
      <div>Axios Page: Working with apis (GET Request)</div>
      <button onClick={getGitHubUsers} className="btn bg-red-800">
        Get Users
      </button>

      <div>

        { gitError &&   <div className="text-red-800 font-bold text-5xl">{gitError}</div>}
        {gitHubUsers.map((user) => (
            <div
              className="flex items-center  space-x-4 bg-orange-600 m-4 p-2 text-white capitalize font-bold"
              key={user.id}
            >
              <img className="w-10 h-10 rounded-full" src={user.avatar_url} />
              <div>{user.login}</div>
            </div> ))}
                { eDeyLoad && <div className="text-red-800 font-bold text-5xl">Loading...</div>}
        {/* { gitHubUsers ? (
          <div className="text-red-800 font-bold text-5xl">Loading...</div>
        ) : gitError.length > 0 ? (
          <div className="text-red-800 font-bold text-5xl">{gitError}</div>
        ) : (
          gitHubUsers.map((user) => (
            <div
              className="flex items-center  space-x-4 bg-orange-600 m-4 p-2 text-white capitalize font-bold"
              key={user.id}
            >
              <img className="w-10 h-10 rounded-full" src={user.avatar_url} />
              <div>{user.login}</div>
            </div>
          ))
        )} */}
      </div>
    </>
  );
};