import NavBar from "../NavBar/NavBar";

const Header = ({}) => {
  return (
    <header className="px-5 py-[10px]  flex justify-between items-center max-w-header mx-auto overflow-hidden ">
      <div className="shrink-0">
        <img
          src="/images/Instagram_logo.svg"
          alt=""
          className="w-[108px] translate-y-0.5 "
        />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
