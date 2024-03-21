import { Forum } from "@/Components/Forum";
import { ForumHeading } from "@/Components/ForumHeading";
import { Market } from "@/Components/Market";
import MarketHeading from "@/Components/MarketHeading";
import { SideBar } from "@/Components/SideBar";

export default function Home() {
  return (
    <main >
    <ForumHeading/> 
      <Forum/>
      <Forum/>
      <Forum/>
      <Forum/>
      <MarketHeading/>
      <Market/>
      <Market/>
      <Market/>
      <SideBar/>
    </main>
  );
}
