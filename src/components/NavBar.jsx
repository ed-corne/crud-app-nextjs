import Link from "next/link";
import Icon from "./Icon";
import Image from "next/image";

function NavBar() {
  return (
    <div className="mx-5 mt-7 flex justify-between items-center">
      <Link href={"/"}>
        <h1 className="text-3xl text-lime-200 font-bold ">To Do</h1>
      </Link>
      <Link
        href={"/new"}
        className="text-xl hover:bg-neutral-700 font-bold rounded-full p-1"
      >
        <Icon name={'add'} alt="add icon" className="w-13 " />
      </Link>
      
    </div>
  );
}

export default NavBar;
