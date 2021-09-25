import React from "react";
import "./style.css";

const Links = () => {
  return (
    <>
      <div className="links">
        <a href="https://www.reddit.com/r/chicago/new/">
          <p className="link-text underline">r/chicago.</p>
        </a>
        <a href="https://www.reddit.com/r/webdev/">
          <p className="link-text underline">r/webdev.</p>
        </a>
        <a href="https://dashboard.twitch.tv/u/musbynice/stream-manager">
          <p className="link-text underline">twitch.</p>
        </a>
        <a href="https://github.com/ian-wag?tab=repositories">
          <p className="link-text underline">github.</p>
        </a>
      </div>
    </>
  );
};

export default Links;
