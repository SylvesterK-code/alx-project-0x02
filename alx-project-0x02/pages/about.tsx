// import Layout from "@/components/layout/Layout";

// const AboutPage = () => {
//   return (
//     <Layout>
//       <h1 className="text-3xl font-bold text-gray-800">About SoloForge</h1>
//       <p className="mt-2 text-gray-600">
//         SoloForge is a learning-focused project designed to master autonomy in full-stack development.
//         Built using Next.js, TypeScript, and Tailwind CSS.
//       </p>
//     </Layout>
//   );
// };

// export default AboutPage;









// pages/about.tsx

//import Layout from "@/components/layout/Layout";
import React from 'react';
import Button from '@/components/common/Button';
import Header from "@/components/layout/Header";

const AboutPage = () => {
  return (
    <>
    <div className="p-8 space-y-4">
      <Header /> 
      <main className="p-6">
        
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <div className="flex gap-4 flex-wrap">
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Large Button" size="large" shape="rounded-full" />
      </div>
      </main>
    </div>
    </>
  );
};

export default AboutPage;
