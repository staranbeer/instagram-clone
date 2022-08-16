import Stories from "../components/layout/Stories/Stories";
import Posts from "./../components/layout/Posts/Posts";

const Home = () => {
  return (
    <div className=" bg-gray-100 justify-center flex max-w-full mx-auto">
      <div className="xs:mt-6 max-w-full ">
        <Stories />
        <Posts />
      </div>
      <div className="ml-10 suggestions:flex hidden mt-10 w-[320px] self-start  items-center justify-between">
        <div className="flex items-center">
          <div className="user__avatar">
            <div className="w-[56px] h-[56px] bg-red-400 rounded-full"></div>
          </div>
          <div className="user__name text-sm font-medium ml-4 tracking-normal">
            tarantarantaranbeerr
          </div>
        </div>
        <div className="switch text-xs font-bold text-sky-600">Switch</div>
      </div>
    </div>
  );
};

export default Home;
