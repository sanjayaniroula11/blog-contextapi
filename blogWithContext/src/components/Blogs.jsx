import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Blogs() {
    const { titles } = useContext(UserContext);

    if (!titles.length) return <div><h2>You don't have any blogs now</h2></div>; 

    return (
        <main>
            <div className="blogs-grid">
                {titles.map((blog, index) => (
                    <div className="one-blog" key={index}>
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
                            <div className="blog-description">
                                <p>
                                    {blog.description}
                                </p>
                            </div>
                            <div className="writer">
                                <p>sanjaya niroula</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Blogs;
