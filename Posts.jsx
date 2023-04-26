import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
import * as blogPosts from "../../mockupData/dbBlogData.json";

const Posts = () => {

return (
	
	<div>
		<div className="Intro">
              <h1>ABOUT ME</h1>
                <h3>I'm a Software Developer by profession with Interest In Web Designing and a Freelance Designer from Mumbai.
  As a software developer I work on ASP.NET MVC and MS SQL for website development.I make static and dynamic websites using HTML , CSS, JQuery and Bootstrap. I also love doing Personalized Art for my clients which Includes logo designing , wedding Invitation videos , and Invitation cards.</h3>                            
        </div>
		<div className="posts-container">
			{blogPosts.default.map(post => (
				<Post key={post.id} post={post} />
			))}
		</div>
		
	</div>
);
};

export default Posts;
