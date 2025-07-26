// const Header = () => {
//   return (
//     <header className="bg-white shadow-md p-4">
//       <h2 className="text-xl font-semibold text-gray-800">SoloForge Navigation</h2>
//     </header>
//   );
// };

// export default Header;





import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800">SoloForge</h2>
        <ul className="flex space-x-4 text-blue-600 font-medium">
          <li>
            <Link href="/home" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
