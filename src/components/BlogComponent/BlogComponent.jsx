import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function BlogComponent() {
  const [blogs, setServices] = useState([]);

  useEffect(() => {
    const fakeApiData = [
      {
        id: 1,
        img: "https://themes.pixelstrap.com/fastkart/assets/images/grocery/blog/2.jpg",
        text: "Email Marketing",
        title: "Best selling bag online market place...",
        textBase: "Anil Viradiya - MARCH 9, 2022",
      },
      {
        id: 2,
        img: "https://themes.pixelstrap.com/fastkart/assets/images/grocery/blog/3.jpg",
        text: "Conversion rate optimization",
        title: "Best selling bag online market place...",
        textBase: "Anil Viradiya - MARCH 9, 2022",
      },
      {
        id: 3,
        img: "https://themes.pixelstrap.com/fastkart/assets/images/grocery/blog/3.jpg",
        text: "Conversion rate optimization",
        title: "Best selling bag online market place...",
        textBase: "Anil Viradiya - MARCH 9, 2022",
      },
    ];

    setServices(fakeApiData);
  }, []);




  return (
    <>
        <div id="blog_comp">
        <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="caption">
                    <h3>Blog</h3>
                </div>
            </div>
            
          {blogs.map((blog) => (
            <div className="col">
              <div className="image-info">
                <div className="image">
                 <Link>
                    <img src={blog.img} alt="Salad" />
                 </Link>
                </div>
                <div className="info">
                  <p className="likeBtn">{blog.text}</p>
                  <Link to="">
                    <h4>{blog.title}</h4>
                  </Link>
                  <p className="date">{blog.textBase}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    </>
  );
}

export default BlogComponent;