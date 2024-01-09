import Image from "next/image";

function Icon({ name, ...props }) {
  return <Image
  src={`/${name}.svg`}
  width={50}
  height={50}
  {...props} 
/>;
};

export default Icon;
