// components/common/PostCard.tsx

import { PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition duration-300">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-700 mb-2">{content}</p>
      <p className="text-xs text-gray-500">Posted by User #{userId}</p>
    </div>
  );
}
