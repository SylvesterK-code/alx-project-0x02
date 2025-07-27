// pages/posts.tsx

// import Layout from '@/components/layout/Layout';

// const PostsPage = () => {
//   return (
//     <Layout>
//       <h1 className="text-2xl font-bold">Posts Page</h1>
//       <p className="mt-2">Here you will see all the posts in future updates.</p>
//     </Layout>
//   );
// };

// export default PostsPage;





// pages/posts.tsx

// import Header from "@/components/layout/Header";

// export default function PostsPage() {
//   return (
//     <>
//       <Header />
//       <main className="p-6">
//         <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
//         <p>This page will display a list of posts.</p>
//       </main>
//     </>
//   );
// }






// display list of posts

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
      const data = await res.json();

      // Format to match PostProps structure
      //Define a JSONPost type for clarity
// type JSONPost = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// const formatted = data.map((post: JSONPost) => ({
//   userId: post.userId,
//   id: post.id,
//   title: post.title,
//   content: post.body,
// }));


   // Format to match PostProps structure
// Inline Type Annotation
const formatted = data.map((post: { userId: number; id: number; title: string; body: string }) => ({
  userId: post.userId,
  id: post.id,
  title: post.title,
  content: post.body,
}));





      setPosts(formatted);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              userId={post.userId}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
      </main>
    </>
  );
}
