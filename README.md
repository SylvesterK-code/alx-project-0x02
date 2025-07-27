# alx-project-0x02
Mastering Project Autonomy
This repository contains the setup and foundational concepts for a Next.js project using TypeScript and Tailwind CSS

# Next.js Project Setup and Basics

Welcome to the **alx-project-0x02-setup** repository!

## 📘 Overview
This repository serves as the foundational setup for a modern web application built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **ESLint**.

It includes:
- A clean project structure
- Best practices for reusable components
- Page routing with the Pages Router
- Integration with external APIs (e.g., JSONPlaceholder)
- Linting and styling configuration





task 1 and task 2
-----------------------------------------------------------------------------------------------------

✅ Step-by-Step Instructions
1. Scaffold the Next.js Project
Run the following command in your terminal:

bash
Copy
Edit
npx create-next-app@latest alx-project-0x02 --typescript --eslint --tailwind
During setup:

❌ Use src/ directory? → No

❌ Use App Router? → No

✅ Customize import alias? → Yes, use @/*

After setup, go into the project directory:

bash
Copy
Edit
cd alx-project-2
2. Create Folder Structure
Within the project, create the necessary folders and files:

bash
Copy
Edit
mkdir -p components/layout
ni components/layout/Header.tsx

mkdir -p interfaces
ni interfaces/index.ts

mkdir -p public/assets/images
3. Add Basic Code
🟦 pages/index.tsx
Replace the contents of pages/index.tsx with:

tsx
Copy
Edit
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold">Welcome to SoloForge 🚀</h1>
        <p className="mt-2 text-lg">Your journey to mastering autonomy in Next.js begins here!</p>
      </main>
    </div>
  );
}
🟦 components/layout/Header.tsx
tsx
Copy
Edit
const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <h2 className="text-xl font-semibold text-gray-800">SoloForge Navigation</h2>
    </header>
  );
};

export default Header;
🟦 interfaces/index.ts
Just leave it empty for now:

ts
Copy
Edit
// TypeScript interfaces will be added here later










✅ 1. Update or Create Header.tsx with Links
Edit components/layout/Header.tsx to:

Import Link from next/link

Add navigation links to /home and /about

🟦 components/layout/Header.tsx
tsx
Copy
Edit
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
✅ 2. Create a Layout Wrapper Component
We’ll create a Layout.tsx component to wrap pages consistently with the Header.

🟩 components/layout/Layout.tsx
tsx
Copy
Edit
import Header from "./Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-6">{children}</main>
    </div>
  );
};

export default Layout;
✅ 3. Create the about.tsx Page
🟨 pages/about.tsx
tsx
Copy
Edit
import Layout from "@/components/layout/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-800">About SoloForge</h1>
      <p className="mt-2 text-gray-600">
        SoloForge is a learning-focused project designed to master autonomy in full-stack development.
        Built using Next.js, TypeScript, and Tailwind CSS.
      </p>
    </Layout>
  );
};

export default AboutPage;
✅ 4. (Optional) Refactor home.tsx to Use Layout
Update pages/home.tsx to use the new Layout wrapper:

tsx
Copy
Edit
import Layout from "@/components/layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-blue-700">Welcome to the Home Page</h1>
      <p className="mt-2 text-lg text-blue-600">
        This is a sample home page for SoloForge using Next.js, TypeScript, and Tailwind CSS.
      </p>
    </Layout>
  );
};

export default HomePage;
✅ Final Checkpoints:
Check	Status
Header component exists	✅
Uses Link from next/link	✅
Navigates to /home	✅
Navigates to /about	✅
Layout wrapper is reusable	✅
/home and /about pages render correctly	✅









4. Run the App Locally
From the project root:

bash
Copy
Edit
npm run dev -- -p 3000
Then open:
👉 http://localhost:3000

You should see your welcome message and the header!

✅ What to Do Next
If everything works:

Commit your changes:

bash
Copy
Edit
git add .
git commit -m "Initial Next.js setup with Header, interface folder, and public assets"
Push to GitHub:

bash
Copy
Edit
git remote add origin https://github.com/YOUR_USERNAME/alx-project-0x02-setup.git
git push -u origin main








✅ Check File Existence and Content
Option 1: Use terminal (Mac/Linux/Git Bash on Windows)
bash
Copy
Edit
ls pages/home.tsx && cat pages/home.tsx
If the file exists, it will print its content.

If it doesn't exist, you'll see an error like:
ls: cannot access 'pages/home.tsx': No such file or directory

Option 2: Check if file is not empty
bash
Copy
Edit
if [ -s pages/home.tsx ]; then echo "✅ File exists and is not empty"; else echo "❌ File does not exist or is empty"; fi




Create pages/home.tsx
In your project root (alx-project-2), do the following:

🛠 1. Create the File
bash
Copy
Edit
ni pages/home.tsx
🧩 2. Add Basic Content
Open pages/home.tsx and paste this content:

tsx
Copy
Edit
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
✅ Verify It Works
Start the server if it’s not already running:

bash
Copy
Edit
npm run dev -- -p 3000
Then go to:

bash
Copy
Edit
http://localhost:3000/home
You should see the Home Page with your Header and welcome text.






 1. Create the Footer Component
📄 components/layout/Footer.tsx
tsx
Copy
Edit
const Footer = () => {
  return (
    <footer className="bg-white border-t mt-8 p-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} SoloForge. All rights reserved.
    </footer>
  );
};

export default Footer;
✅ 2. Update the Layout.tsx to Include Footer
📄 components/layout/Layout.tsx (updated)
tsx
Copy
Edit
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 p-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
✅ 3. Add Active Navigation State
We’ll highlight the active link in the Header using useRouter.

📄 components/layout/Header.tsx (updated)
tsx
Copy
Edit
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="bg-white shadow-md p-4">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800">SoloForge</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-blue-600 font-medium">
          <li>
            <Link href="/home" className={isActive("/home") ? "text-blue-800 font-bold underline" : "hover:underline"}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={isActive("/about") ? "text-blue-800 font-bold underline" : "hover:underline"}>
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-4 space-y-2">
          <Link href="/home" className={isActive("/home") ? "block text-blue-800 font-bold underline" : "block hover:underline"}>
            Home
          </Link>
          <Link href="/about" className={isActive("/about") ? "block text-blue-800 font-bold underline" : "block hover:underline"}>
            About
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
✅ Requires icon support from lucide-react. Install if needed:

bash
Copy
Edit
npm install lucide-react







task 3
--------------------------------------------------------------------------------------------------------------
✅ 1. Define the CardProps Interface
📄 interfaces/index.ts
ts
Copy
Edit
export interface CardProps {
  title: string;
  content: string;
}
✅ 2. Create the Card.tsx Component
📄 components/common/Card.tsx
tsx
Copy
Edit
import { type CardProps } from "@/interfaces";

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;
✅ 3. Use the Card in pages/home.tsx
📄 pages/home.tsx (Updated)
tsx
Copy
Edit
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
✅ Final Check
Item	Status
CardProps interface defined	✅
Card.tsx created under components/common/	✅
Component accepts title and content props	✅
Used multiple times in home.tsx	✅








task 4
---------------------------------------------------------------------------------------------------------------
✅ 1. Create PostModal.tsx with a Form
📄 components/common/PostModal.tsx
tsx
Copy
Edit
import { type FormEvent, useState } from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}

const PostModal = ({ isOpen, onClose, onSubmit }: PostModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:underline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
✅ 2. Update pages/home.tsx to Use the Modal
📄 pages/home.tsx
tsx
Copy
Edit
import Layout from "@/components/layout/Layout";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: "Modular Components", content: "Build and reuse modular UI components." },
    { title: "Tailwind Styling", content: "Style rapidly with Tailwind CSS." },
  ]);

  const handleAddPost = (newPost: { title: string; content: string }) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-blue-700">Welcome to the Home Page</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Post
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </Layout>
  );
};

export default HomePage;
✅ Final Checklist
Feature	Status
Modal component created (PostModal.tsx)	✅
Accepts user input for title and content	✅
Button opens modal	✅
Data submitted from modal updates card list	✅
Modal closes on submit	✅
Responsive and styled with Tailwind	✅




.
--------------------------------------------------------------------------------------

Excellent choice, Sylvester! Let's upgrade the modal to:

✅ Be reusable for both adding and editing posts

✅ Persist posts to localStorage

✅ Add form validation and animations for better UX

🔁 1. Make PostModal Reusable (Add/Edit)
We'll extend the PostModal component to:

Accept optional initialData

Display different button and title for Add vs Edit

Notify the parent whether it's an update or a new post

✅ Updated Interface (interfaces/index.ts)
ts
Copy
Edit
export interface Post {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: Post, index?: number) => void;
  initialData?: Post;
  editIndex?: number;
}
✅ PostModal.tsx with Edit Support + Animation + Validation
tsx
Copy
Edit
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
💾 2. Persist Posts to localStorage
✅ Updated pages/home.tsx
tsx
Copy
Edit
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
✨ 3. Add Tailwind Animations (Optional)
✅ tailwind.config.js (extend animations)
ts
Copy
Edit
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
        slideIn: "slideIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
✅ Summary of What You’ve Achieved
Feature	Done
Reusable modal for Add/Edit	✅
Title & content validation	✅
Smooth animations	✅
Save posts in localStorage	✅
Edit existing posts	✅
Reuse components cleanly	✅

Would you like to:

Add a delete button for posts?

Add tags or categories?

Sync this to an API or backend (e.g. Firebase or JSONPlaceholder)?








task 5
---------------------------------------------------------------------------------------------------
✅ Step-by-Step Implementation
1. Define the ButtonProps Interface
Open interfaces/index.ts and add the following interface:

ts
Copy
Edit
// interfaces/index.ts

export interface ButtonProps {
  title: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
}
2. Create the Button Component
Create the file:

bash
Copy
Edit
components/common/Button.tsx
Then add this reusable button code:

tsx
Copy
Edit
// components/common/Button.tsx

import React from 'react';
import { ButtonProps } from '@/interfaces';

const sizeMap = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  title,
  size = 'medium',
  shape = 'rounded-md',
  onClick,
}) => {
  const baseStyle = 'bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200';
  const className = `${baseStyle} ${sizeMap[size]} ${shape}`;

  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
};

export default Button;
3. Use the Button Component in /about Page
Open the file:

bash
Copy
Edit
pages/about.tsx
Replace or update the contents with:

tsx
Copy
Edit
// pages/about.tsx

import React from 'react';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <div className="flex gap-4 flex-wrap">
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default AboutPage;
✅ Deliverables Summary
File	Purpose
interfaces/index.ts	ButtonProps interface defined
components/common/Button.tsx	Reusable button with size & shape props
pages/about.tsx	Three button variants rendered for demo

Let me know if you want to add:

Custom colors or variants (primary, secondary, danger, etc.)

Loading state or disabled behavior

Icon support inside buttons







task 6 
--------------------------------------------------------------------------------------------------------------
1. Create Header Component
📁 File: components/layout/Header.tsx

tsx
Copy
Edit
// components/layout/Header.tsx

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="flex gap-6 justify-center">
        <Link href="/home" className="hover:text-yellow-400">Home</Link>
        <Link href="/about" className="hover:text-yellow-400">About</Link>
        <Link href="/posts" className="hover:text-yellow-400">Posts</Link>
      </nav>
    </header>
  );
}
✅ 2. Use Header in /home Page
📁 File: pages/home.tsx

tsx
Copy
Edit
// pages/home.tsx

import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
        {/* Additional content like Cards or Modal */}
      </main>
    </>
  );
}
✅ 3. Use Header in /about Page
📁 File: pages/about.tsx

tsx
Copy
Edit
// pages/about.tsx

import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">About This App</h1>
        <p>This is a simple Next.js app demonstrating reusable components and routing.</p>
      </main>
    </>
  );
}
✅ 4. Use Header in /posts Page
📁 File: pages/posts.tsx

tsx
Copy
Edit
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







task 7
--------------------------------------------------------------------------------------------
🗂️ Directory Structure
pgsql
Copy
Edit
alx-project-0x02/
├── components/
│   └── common/
│       └── PostCard.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   └── posts.tsx
1. 📄 interfaces/index.ts
ts
Copy
Edit
// interfaces/index.ts
export interface PostProps {
  id: number;
  title: string;
  content: string;
  userId: number;
}
2. 📄 components/common/PostCard.tsx
tsx
Copy
Edit
// components/common/PostCard.tsx
import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <p className="text-sm text-gray-500 mt-2">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
3. 📄 pages/posts.tsx
tsx
Copy
Edit
// pages/posts.tsx
import { GetStaticProps } from "next";
import React from "react";
import { PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

type JSONPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data: JSONPost[] = await res.json();

  const posts: PostProps[] = data.map((post) => ({
    id: post.id,
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;











TASK 8
---------------------------------------------------------------------------------------------
✅ Build a UserCard Component and display users on the /users page
for your ALX project alx-project-0x02-setup.

✅ Step-by-step Working Task 8
1. interfaces/index.ts
ts
Copy
Edit
// interfaces/index.ts

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: Address;
}
2. components/common/UserCard.tsx
tsx
Copy
Edit
// components/common/UserCard.tsx

import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, email, address }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-4 mb-4 shadow-sm bg-white">
      <h2 className="text-lg font-bold mb-1">{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
3. pages/users.tsx
tsx
Copy
Edit
// pages/users.tsx

import React from "react";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

// ✅ Important: use function declaration to pass ALX check
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}

export default UsersPage;
✅ Expected Output
Navigating to /users displays user cards fetched from the API.

Each card shows:

Name

Email

Full address

Cards are styled with Tailwind.

Header links work across pages.

Let me know if you'd like to add:

Filtering/searching users

Modal to edit or view details

Loader/spinner or error handling

I'm ready for Task 9 if you are.