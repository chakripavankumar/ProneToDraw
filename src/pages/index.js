import Board from "../components/Board/index";
import Menu from "../components/Menu/index";
import Toolbox from "../components/Toolbox/index";
import { UserButton } from "@clerk/nextjs";




export default function Home() {
  return (
   
    <div className="p-3">
      <UserButton  afterSignOutUrl="/"/>
      <Menu />
      <Toolbox />
      <Board />
       </div>
   
  )

}