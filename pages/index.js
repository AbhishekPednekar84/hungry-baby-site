// Component imports
import Landing from "@/components/home/Landing";
import Navbar from "@/components/common/Navbar";
import HomeHeadLayout from "@/components/layout/head/HomeHeadLayout";

export default function Home() {
  return (
    <HomeHeadLayout>
      <Navbar />
      <section>
        <Landing />
      </section>
    </HomeHeadLayout>
  );
}
