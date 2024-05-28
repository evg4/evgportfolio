import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./TwitterTimeline.module.css";

function TwitterTimeline() {
  const twitterRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    script.onload = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load(twitterRef.current);
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={twitterRef}>
      <Link
        className="twitter-timeline"
        to="https://twitter.com/Lizzie_Codes?ref_src=twsrc%5Etfw"
      >
        Loading tweets by Lizzie_Codes...
      </Link>
    </div>
  );
}

export default TwitterTimeline;
