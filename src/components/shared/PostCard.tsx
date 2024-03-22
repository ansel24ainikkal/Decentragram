import React from "react";
import { Link } from "react-router-dom";

type PostCardProps = {
  post: {
    creator: {
      name: "Mrudul";
      id: "Hardcoded-MVP";
    };
    likes: 8;
    captions: "Good Morning Mumbai";
  };
};
const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${post.creator.id}`}></Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
