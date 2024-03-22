import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { SocialContext } from "@/context/contractContext";
import React, { useContext } from "react";

// type PostCardProps = {};

const Home = () => {
  const { contract } = useContext(SocialContext);
  console.log(contract);
  let posts = [
    {
      creator: {
        name: "Mrudul",
        id: "Hardcoded-MVP",
      },
      likes: 8,
      captions: "Good Morning Mumbai",
      imageUrl: "src/assets/images/Mrudul_image.jpg",
      tags: ["peaceful", "serene", "calm"],
      id: "ABC",
    },
    {
      creator: {
        name: "Warren",
        id: "DeadSpheroid",
      },
      likes: 7,
      captions: "Good Evening",
      imageUrl: "src/assets/images/Warren_image.jpg",
      tags: ["soothing", "serene", "calming"],
      id: "DEF",
    },
    {
      creator: {
        name: "Advait",
        id: "TIDYMOUSE",
      },
      likes: 10,
      captions: "GoodNight",
      imageUrl: "src/assets/images/Advait_image.jpg",
      tags: ["peaceful", "serene", "calm"],
      id: "XYZ",
    },
  ];

  const isPostLoading = false;
  // const posts = null;
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bol text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts.map((post) => (
                <PostCard post={post} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
