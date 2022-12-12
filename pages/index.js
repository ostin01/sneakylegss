import Head from "next/head";
import About from "../component/About";
import Categories from "../component/Categories";
import Comment from "../component/Comment";
import Featured from "../component/Featured";
import HeroSection from "../component/HeroSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SneakyLegs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../images/icon.png" />
      </Head>
      <div>
        <HeroSection />
        <About />
        <Categories />
        <Featured />
        <Comment />
      </div>
    </div>
  );
}
