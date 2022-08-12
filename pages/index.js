import Stories from "../components/layout/Stories/Stories";
import Posts from "./../components/layout/Posts/Posts";

const Home = () => {
  return (
    <div className="bg-gray-100 ">
      <Stories />
      <div classNames="mx-auto flex">
        <Posts />
        <div>taran</div>
      </div>
    </div>
  );
};

export default Home;
