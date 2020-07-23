import React, { useState, useEffect } from "react";
import GithubProfileCard from "../../components/githubProfileCard";
import axios from "axios";
import { openSource } from "../../portifolio";


export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }
  function getProfileData() {
    const client=axios.get("https://api.github.com/users/"+openSource.githubUserName)
      .then(function(response){
            setProfileFunction(response.data);
    });
  }
  useEffect(() => {
    getProfileData();
  }, []);
  if (openSource.showGithubProfile === "true"){
    return ( <GithubProfileCard prof={prof} key={prof.id} /> );
  } 
}
