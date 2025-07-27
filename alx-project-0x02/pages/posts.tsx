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

import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
        <p>This page will display a list of posts.</p>
      </main>
    </>
  );
}
