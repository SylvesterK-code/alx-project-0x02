import Header from "@/components/layout/Header";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-700">Welcome to the Home Page</h1>
        <p className="mt-2 text-lg text-blue-600">
          This is a sample home page for SoloForge using Next.js, TypeScript, and Tailwind CSS.
        </p>
      </main>
    </div>
  );
};

export default HomePage;







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
