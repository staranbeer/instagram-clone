import Stories from "../components/layout/Stories/Stories";
import Suggestions from "../components/layout/Suggestions/Suggestions";
import createPosts from "../lib/createPosts";
import createStories from "../lib/createStories";
import Posts from "./../components/layout/Posts/Posts";

const Home = (props) => {
  const { stories, posts } = props;

  return (
    <div className="justify-center flex max-w-full mx-auto">
      <div className="xs:mt-6 max-w-full">
        <Stories stories={stories} />
        <Posts posts={posts} />
      </div>
      <Suggestions />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const stories = createStories();
  const posts = createPosts();

  return {
    props: { stories, posts },
  };
}
