import { PostProps } from "@/interfaces";

interface PostCardProps extends PostProps {
  onDelete?: (id: number) => void;
  onEdit?: (post: PostProps) => void;
}

export const PostCard = ({ id, title, content, category, onDelete, onEdit }: PostCardProps) => {
  return (
    <div className="bg-white border p-4 rounded-lg shadow mb-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700 mt-2">{content}</p>

      <div className="flex gap-2 flex-wrap mt-2">
        {category?.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => onEdit?.({ id, title, content, category })}
          className="text-blue-600 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete?.(id!)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
