

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







import Layout from "@/components/layout/Layout";
import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Welcome to the Home Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Modular Components"
          content="Build and reuse modular UI components across your app."
        />
        <Card
          title="TypeScript Safety"
          content="Define prop types with interfaces for better development experience."
        />
        <Card
          title="Tailwind Styling"
          content="Use utility-first CSS for rapid and responsive design."
        />
      </div>
    </Layout>
  );
};

export default HomePage;
