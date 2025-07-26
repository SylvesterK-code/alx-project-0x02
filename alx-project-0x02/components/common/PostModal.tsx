// import { type FormEvent, useState } from "react";

// interface PostModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSubmit: (post: { title: string; content: string }) => void;
// }

// const PostModal = ({ isOpen, onClose, onSubmit }: PostModalProps) => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     onSubmit({ title, content });
//     setTitle("");
//     setContent("");
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-md shadow-lg w-[90%] max-w-md">
//         <h2 className="text-xl font-semibold mb-4">Add New Post</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//           <textarea
//             placeholder="Content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//           <div className="flex justify-end gap-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 text-gray-600 hover:underline"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//             >
//               Post
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PostModal;










// Edit Support + Animation + Validation. edit post
// We'll extend the PostModal component to:
// Accept optional initialData
// Display different button and title for Add vs Edit

// Notify the parent whether it's an update or a new post

import { useEffect, useState, FormEvent } from "react";
import { PostModalProps } from "@/interfaces";

const PostModal = ({ isOpen, onClose, onSubmit, initialData, editIndex }: PostModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError("Both fields are required.");
      return;
    }
    onSubmit({ title: title.trim(), content: content.trim() }, editIndex);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md animate-slideIn">
        <h2 className="text-2xl font-bold mb-4">
          {editIndex !== undefined ? "Edit Post" : "Add New Post"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <textarea
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="text-gray-500 hover:underline">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              {editIndex !== undefined ? "Update" : "Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
