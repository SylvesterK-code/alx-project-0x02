// components/common/PostCard.tsx

// import { PostProps } from "@/interfaces";

// export default function PostCard({ title, content, userId }: PostProps) {
//   return (
//     <div className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition duration-300">
//       <h2 className="text-xl font-semibold mb-2">{title}</h2>
//       <p className="text-sm text-gray-700 mb-2">{content}</p>
//       <p className="text-xs text-gray-500">Posted by User #{userId}</p>
//     </div>
//   );
// }




// components/common/PostCard.tsx   UPDATE
import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <p className="text-sm text-gray-500 mt-2">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
