import Link from "next/link";
import NavBar from "./NavBar/NavBar";

const Header = ({}) => {
  return (
    <header className="fixed w-full bg-white  border-b">
      <div className="px-5  py-2.5  flex justify-between items-center max-w-header    overflow-hidden mx-auto">
        <Link href={"/"} className="shrink-0">
          <a>
            <img
              src="/images/Instagram_logo.svg"
              alt=""
              className="w-[108px] translate-y-0.5 "
            />
          </a>
        </Link>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
