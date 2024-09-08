import Image from "next/image";
import Name from "./components/name";
import Placeholder from "./components/placeholder";
import Logo from "./components/logo";
import Btn from "./components/button";
import Clocl from "./components/clocl";
export default function Home() {
  return (
   <>
    
    <Name></Name>
    <Logo color="#FF0000"></Logo>
    <Btn></Btn>
    <Placeholder name1="Let The Show Begin" name2="11°31’N / 05°11’S"></Placeholder>
    <Clocl></Clocl>
   </>
  );
}
