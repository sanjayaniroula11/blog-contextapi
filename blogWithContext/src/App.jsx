import { useState, useContext} from "react";
import UserContext from "./context/UserContext";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Blogs from "./components/Blogs";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [blogs, setBlogs] = useState([]);


  const { setTitles } = useContext(UserContext);
  


  const addBlog = (e) => {
    e.preventDefault();


    setTitles({title})

    const newBlog = { title, description, imageLink };
    
    setTitles((prevTitles) => [...prevTitles, newBlog]);

    setBlogs((prevBlogs)=> [...prevBlogs, newBlog]);

    setTitle('');
    setDescription('');
    setImageLink('');
    

    
  };

  return (
    <UserContextProvider>
      <header>
        <nav>
          <div className="logo-section">
            <h2>-V BLOG</h2>
          </div>
          <div className="nav-links">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Tutorial</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="input-things">
        <h5>Enter the title of your blog</h5>
        <input
          type="text"
          className="fields"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <h5>Description</h5>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="fields"
        />{" "}
        <br />
        <h5>Image link</h5>
        <input
          type="text"
          className="fields"
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)}
        />{" "}
        <br />
        <button onClick={addBlog}>Post</button>
      </div>

    <Blogs/>

    </UserContextProvider>
  );
}

export default App;
