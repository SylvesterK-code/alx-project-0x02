

// import Header from "@/components/layout/Header";

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-blue-50">
//       <Header />
//       <main className="p-8 text-center">
//         <h1 className="text-4xl font-bold text-blue-700">Welcome to the Home Page</h1>
//         <p className="mt-2 text-lg text-blue-600">
//           This is a sample home page for SoloForge using Next.js, TypeScript, and Tailwind CSS.
//         </p>
//       </main>
//     </div>
//   );
// };

// export default HomePage;







//new Layout wrapper:

// import Layout from "@/components/layout/Layout";

// const HomePage = () => {
//   return (
//     <Layout>
//       <h1 className="text-4xl font-bold text-blue-700">Welcome to the Home Page</h1>
//       <p className="mt-2 text-lg text-blue-600">
//         This is a sample home page for SoloForge using Next.js, TypeScript, and Tailwind CSS.
//       </p>
//     </Layout>
//   );
// };

// export default HomePage;







// import Layout from "@/components/layout/Layout";
// import Card from "@/components/common/Card";

// const HomePage = () => {
//   return (
//     <Layout>
//       <h1 className="text-4xl font-bold text-blue-700 mb-6">Welcome to the Home Page</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <Card
//           title="Modular Components"
//           content="Build and reuse modular UI components across your app."
//         />
//         <Card
//           title="TypeScript Safety"
//           content="Define prop types with interfaces for better development experience."
//         />
//         <Card
//           title="Tailwind Styling"
//           content="Use utility-first CSS for rapid and responsive design."
//         />
//       </div>
//     </Layout>
//   );
// };

// export default HomePage;







// // update post

// import Layout from "@/components/layout/Layout";
// import Card from "@/components/common/Card";
// import PostModal from "@/components/common/PostModal";
// import { useState } from "react";

// const HomePage = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [posts, setPosts] = useState([
//     { title: "Modular Components", content: "Build and reuse modular UI components." },
//     { title: "Tailwind Styling", content: "Style rapidly with Tailwind CSS." },
//   ]);

//   const handleAddPost = (newPost: { title: string; content: string }) => {
//     setPosts((prev) => [...prev, newPost]);
//   };

//   return (
//     <Layout>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-4xl font-bold text-blue-700">Welcome to the Home Page</h1>
//         <button
//           onClick={() => setModalOpen(true)}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           + Add Post
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {posts.map((post, index) => (
//           <Card key={index} title={post.title} content={post.content} />
//         ))}
//       </div>

//       <PostModal
//         isOpen={modalOpen}
//         onClose={() => setModalOpen(false)}
//         onSubmit={handleAddPost}
//       />
//     </Layout>
//   );
// };

// export default HomePage;










// Persist Posts to localStorage
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { Post } from "@/interfaces";

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("alx-posts");
    if (saved) setPosts(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("alx-posts", JSON.stringify(posts));
  }, [posts]);

  const handleAddOrUpdate = (newPost: Post, index?: number) => {
    if (index !== undefined) {
      const updated = [...posts];
      updated[index] = newPost;
      setPosts(updated);
    } else {
      setPosts([...posts, newPost]);
    }
  };

  const openEditModal = (index: number) => {
    setEditingIndex(index);
    setModalOpen(true);
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-blue-700">Post Board</h1>
        <button
          onClick={() => {
            setEditingIndex(null);
            setModalOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Post
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="relative group">
            <Card title={post.title} content={post.content} />
            <button
              onClick={() => openEditModal(index)}
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-sm text-blue-600 underline"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddOrUpdate}
        initialData={editingIndex !== null ? posts[editingIndex] : undefined}
        editIndex={editingIndex !== null ? editingIndex : undefined}
      />
    </Layout>
  );
};

export default HomePage;















