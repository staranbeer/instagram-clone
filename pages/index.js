import Stories from "../components/layout/Stories/Stories";
import Suggestions from "../components/layout/Suggestions/Suggestions";
import Posts from "./../components/layout/Posts/Posts";

const Home = () => {
  return (
    <div className="    justify-center flex max-w-full mx-auto">
      <div className="xs:mt-6 max-w-full">
        <Stories />
        <Posts />
      </div>
      <Suggestions />
    </div>
  );
};

export default Home;
