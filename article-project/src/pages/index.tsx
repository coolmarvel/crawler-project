// import Image from "next/image";
// import { Inter } from "next/font/google";
import Header from "@/components/common/header/header";
import ManagedKeyword from "@/components/managed-keyword";
import ArticleList from "@/components/article-list/article-list";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <div className="font-mono w-[420px] bg-white">
        <Header />

        <div className="mt-[60px] py-10">
          <ManagedKeyword />
          <ArticleList />
        </div>
      </div>
    </main>
  );
}
