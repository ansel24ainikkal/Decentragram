// import { useState, useEffect} from 'react';
// import {useDeleteSavedPost, useLikePost, useSavePost} from "@/lib/react-query/queriesAndMutations";
// import {Models} from "appwrite"

import { Button } from "../ui/button";

// type PostStatsProps ={
//   post: Models.Document;
//   userId: string;
// }

// const PostStats = ({post, userId}: PostStatsProps) => {
// const likesList = post.likes.map((user: Models.Document) => user.$id)
// const [likes, setLikes] = useState(likesList);
// const [isSaved, setIsSaved] = useState(false);
// const {mutate: likePost} = useLikePost();
// const {mutate: savePost, isPending: isSavingpost} = useSavePost();
// const {mutate: deleteSavedPost, isPending: isDeletingSaved} = useDeleteSavedPost();
// const {data: currentUser} = useGetCurrentUser();
// const savedPostRecord = currentUser?.save.find((record: Models.Document) => record.post.$id === post.$id);
// useEffect(() => {
//     setIsSaved(!!savedPostRecord)
// },[currentUser])

// const handleLikePost = (e: React.MouseEvent) => {
//     e.stopPropagation();

//     let newLikes = [...likes];
//     const hasLiked = newLikes.includes(userId)

//     if(hasLiked){
//         newLikes = newLikes.filter((id) => id !== userId);
//     }else{
//         newLikes.push(userId);
//     }

//     setLikes(newLikes);
//     likePost({postId: post.$id, likesArray: newLikes})
// }
// const handleSavePost = (e: React.MouseEvent) => {
//     e.stopPropagation();

//     if(savedPostRecord){
//         setIsSaved(false);
//         deleteSavedPost(savedPostRecord.$id);
//     }else{
//         savePost({postId: post.$id, userId})
//         setIsSaved(true);
//     }

// }
//   return (
//     <div className="flex justify-between items-center z-20">
//         <div className="flex gap-2 mr-5">
//         <img
//             src={{checkIsLiked(likes, userId)
//                  ? "/assets/icons/liked.svg"
//                  : "/assets/icons/like.svg"}
//             }
//             alt="like"
//             width={20}
//             height={20}
//             onClick={handleLikePost}
//             className="cursor-pointer"
//         />
//         <p className="small-medium lg:base-medium">{likes.length}</p>
//         </div>
//         <div className="flex gap-2">
//         {isSavingpost || isDeletingSaved? <Loader/> : <img
//             src="/assets/icons/save.svg"
//             alt="like"
//             width={20}
//             height={20}
//             onClick={() => {}}
//             className="cursor-pointer"
//         />}
//         </div>
//     </div>
//   )
// }

// export default PostStats

const PostStats = () => {
  //   let count = 0;
  //   const changeColour = () => {
  //     console.log(count);
  //     count = count + 1;
  //     if (count % 2 == 0) {
  //       return "like.svg";
  //     } else {
  //       return "liked.svg";
  //     }
  //   };
  //   let name = changeColour();
  //   console.log(name);
  return (
    <section className="post-stats">
      <div className={"flex-start flex-row gap-1 p-2 transition "}>
        <Button>
          <img
            src={"src/assets/icons/like.svg"}
            alt="like"
            width={20}
            height={20}
          />
        </Button>
        <Button>
          <img
            src="src/assets/icons/chat.svg"
            alt="comment"
            width={20}
            height={20}
          />
        </Button>
        <Button>
          <img
            src="src/assets/icons/favicon.ico"
            alt="donate"
            width={20}
            height={20}
          />
        </Button>
      </div>
    </section>
  );
};

export default PostStats;
