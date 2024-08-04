import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [blogs, setBlogs] = useState([]);

  const addBlog = (e) => {
    e.preventDefault();
    const newBlog = { title, description, imageLink };

    setBlogs([...blogs, newBlog]);

    setTitle('');
    setDescription('');
    setImageLink('');
    console.log('Input fields reset');
  };

  return (
    <>
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

      <main>
        <div className="blogs-grid">
          {blogs.map((blog,index)=>(
            <div className="one-blog">
            <div className="blog-picture">
              <img
                src={blog.imageLink}
                alt=""
              />
            </div>

            <div className="blog-content">
              <div className="one-blog-title">
                <h5>{blog.title}</h5>
              </div>
              <div className="blog-content">
                <p>
                  {blog.description}
                </p>
              </div>
              <div className="writer">
                {" "}
                <p>sanjaya niroula</p>
              </div>
            </div>
          </div>))}
        </div>
      </main>
    </>
  );
}

export default App;
