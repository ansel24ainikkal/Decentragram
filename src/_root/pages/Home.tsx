import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { SocialContext } from "@/context/contractContext";
import React, { useContext } from "react";

// type PostCardProps = {};

const Home = () => {
  const { contract } = useContext(SocialContext);
  console.log(contract);
  let post = {
    creator: {
      name: "Mrudul",
      id: "Hardcoded-MVP",
    },
    likes: 8,
    captions: "Good Morning Mumbai",
  };
  const isPostLoading = false;
  const posts = null;
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bol text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              PostCard
              {/* <PostCard post={post} /> */}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
