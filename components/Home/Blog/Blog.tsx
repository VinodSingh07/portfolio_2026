import React from "react";
import BlogCart from "./BlogCart";

const Blog = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My latest <span className="text-cyan-300">Blogs</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <BlogCart
            image="/images/b1.jpg"
            title="30 important System Design Topics"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <BlogCart
            image="/images/b2.jpg"
            title="20 DSA Patterns to crack any Interview"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <BlogCart
            image="/images/b3.jpg"
            title="How to make your first AI Agent"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
