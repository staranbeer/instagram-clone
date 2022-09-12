import { HiOutlineCog } from "react-icons/hi";
import createFeed from "../../lib/createFeed";
function Index(props) {
  const { feed } = props;

  return (
    <div className="max-w-full md:max-w-body mx-auto overflow-hidden">
      <div className="profile__header p-4 md:p-6 pb-6 flex items-center  md:items-start max-w-full  ">
        <div className="profile__img shrink-0 ">
          <div className="h-[77px] w-[77px] md:h-[150px] md:w-[150px] bg-red-400 rounded-full block mx-auto "></div>
        </div>
        <div className="ml-6 xs:ml-8 md:ml-16 md:space-y-[18px]">
          <div className="flex ">
            <div className="items-start  flex  md:mt-2 md:flex-row flex-col">
              <h2 className="text-xl xs:text-[28px]  profile__name tracking-tight ">
                tarantarantaranbeerr
              </h2>
              <button className="whitespace-nowrap md:block w-full px-2 py-1 mt-4 md:mt-0 rounded border-gray-300 border text-sm font-medium md:ml-4">
                Edit profile
              </button>
            </div>
            <div className="ml-6 xs:ml-8  mt-1 md:mt-2  ">
              <HiOutlineCog size="28" />
            </div>
          </div>
          <div className="md:flex hidden profile__stats md:gap-8 justify-around  md:justify-start mt-9  text-center text-sm  md:text-base py-2.5">
            <div className="md:flex gap-1 justify-center">
              <div className="font-semibold">1</div>
              <div className="text-gray-500 md:text-gray-900">post</div>
            </div>
            <div className="md:flex gap-1 justify-center">
              <div className="font-semibold">72</div>
              <div className="text-gray-500 md:text-gray-900">followers</div>
            </div>
            <div className="md:flex gap-1 justify-center">
              <div className="font-semibold">97</div>
              <div className="text-gray-500 md:text-gray-900">following</div>
            </div>
          </div>
          <div className="hidden md:block profile__bio text-sm">
            this is a really cool bio
          </div>
        </div>
      </div>
      <div className="md:hidden profile__bio px-4 text-sm">
        this is a really cool bio
      </div>
      <div className="md:hidden profile__stats flex justify-around mt-9 border-t border-b text-center text-sm py-2.5">
        <div className="">
          <div className="font-semibold">1</div>
          <div className="text-gray-500">post</div>
        </div>
        <div>
          <div className="font-semibold">72</div>
          <div className="text-gray-500">followers</div>
        </div>
        <div>
          <div className="font-semibold">97</div>
          <div className="text-gray-500">following</div>
        </div>
      </div>
      <div className="profile__posts grid-cols-3 grid gap-1 md:mt-6 border-t md:py-12 border-gray-300">
        {feed.map((post) => (
          <div
            className="aspect-square bg-blue-300 cursor-pointer relative"
            key={post.image}
          >
            <img
              src={post.image}
              alt={post}
              className="w-full h-full object-cover absolute top-0 left-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;

export async function getStaticProps() {
  const feed = createFeed();
  return {
    props: {
      feed,
    },
  };
}
