import NavBar from "../NavBar/NavBar";

const Header = ({}) => {
  return (
    <div className="fixed w-full bg-white  border-b">
      <header className="px-2 md:px-5  py-[10px]  flex justify-between items-center max-w-header    overflow-hidden mx-auto">
        <div className="shrink-0">
          <img
            src="/images/Instagram_logo.svg"
            alt=""
            className="w-[108px] translate-y-0.5 "
          />
        </div>
        <NavBar />
      </header>
    </div>
  );
};

export default Header;
