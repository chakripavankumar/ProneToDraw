import Board from "@/components/Board";
import Menu from "@/components/Menu";
import Toolbox from "@/components/Toolbox";
import { UserButton } from "@clerk/nextjs";




export default function Home() {
  return (
   
      <div className="p-3">
      <UserButton afterSignOutUrl='/' />
      <Menu />
      <Toolbox />
      <Board />
       </div>
   
  )

}