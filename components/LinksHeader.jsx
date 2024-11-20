import { Link } from "react-scroll";

function LinksHeader(props) {
  return (
    <Link
      {...props}
      className="hover:text-black max-sm:text-[10px] transition duration-500 text-[15px] flex flex-col items-center hover:cursor-pointer"
    ></Link>
  );
}

export default LinksHeader;
