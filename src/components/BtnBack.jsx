import Link from "next/link";
import Icon from "./Icon";

function BtnBack() {
  return (
    <Link href={"/"}>
      <button
        type="button"
        className="text-xl hover:bg-neutral-700 font-bold rounded-full p-1"
      >
        <Icon name={'arrow'} alt="add icon" className="w-13 " />
        
      </button>
    </Link>
  );
}

export default BtnBack;
