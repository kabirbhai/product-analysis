import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="border-2 rounded-lg">
        <h1 className="text-center my-2 text-orange-500 text-xl">
          Q.1 What is Context API?
        </h1>
        <span className="underline text-xl text-blue-800">Answer:</span>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on.
        </p>
      </div>
      <div className="border-2 rounded-lg">
        <h1 className="text-center my-2 text-orange-500 text-xl">
          Q.2 What is Semantic Tag?
        </h1>
        <span className="underline text-xl text-blue-800 my-2">Answer:</span>
        <p>
          Semantic HTML tags allow us to add meaning to our markup so that
          search engines, screen readers, and web browsers can make sense of it.
          By default, when a user agent reads your content it doesn’t understand
          the context and meaning. Semantic HTML tags let you serve structured
          content to your users, which is especially important for on-page SEO
          and accessibility.
        </p>
      </div>
      <div className="border-2 rounded-lg">
        <h1 className="text-center my-2 text-orange-500 text-xl">
          Q.3 Different of inline block inline-block ?
        </h1>
        <span className="underline text-xl text-blue-800 my-2">Answer:</span>
        <p>
          Display: inline <br />
          Displays an element as an inline element. Any height and width
          properties will have no effect. <br />
          display: inline-block <br /> Displays an element as an inline-level
          block container. You CAN set height and width values. <br /> brought a
          new display: block <br />
          The element will start on a new line and occupy the full width
          available. And you can set width and height values.
        </p>
      </div>
    </div>
  );
};

export default Blog;
