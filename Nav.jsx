import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";

// -- URL to fetch the API data
const baseURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=bc1e7c8baed84cb29ebe51cc9513bd2c"

export default function App() {
  const [post, setPost] = React.useState(null);
  const [accepted, setAccepted] = useState(false);

  React.useEffect(() => {

    // -- To set the refresh rate of the API 
    setTimeout(() => {

      axios.get(baseURL)
      .then((response) => {
        setPost(response.data.articles);
        console.log(JSON.stringify(response.data.articles));
      })
      .catch(error => console.log(`Error: ${error}`));
      setAccepted(!accepted);

      // the miliseconds in the code to fetch 429() Error for hitting the server frequently.
    },10000);
    //accepted

  },[accepted]);


   if (!post) return null;

  return (

    // -- Styling the API data
    <div>
      <Link to="/" style={{textDecoration: "none"}}>
				<h2 className="nav-heading">Home</h2>
			</Link>
      <br/>
      <h2 style={{color:"black"}}>LATEST NEWS</h2>
      <hr/>
      <div className="weatherApi">
       {/* Fetching only 5 data at a time  */}
      {post.filter((ele,index) => index < 5).map((item) => (
        <>
          <img src={item.urlToImage} alt="articleImage" width="100" />
          <h4><strong>{item.title}</strong></h4>
          <p><strong>Author: </strong> {item.author}</p>
          <p>{item.description}</p>
          <p><strong>Published At: </strong>{item.publishedAt}</p>
          <hr/>                                 
        </>
      ))}
      </div>
    </div>
  );
}