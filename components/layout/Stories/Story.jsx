import { faker } from "@faker-js/faker";

const Story = ({}) => {
  return (
    <div className="story inline-block ">
      <div className="story__img p-[2px] bg-gradient-to-bl from-pink-500 to-yellow-200 rounded-full">
        <div className=" bg-white rounded-full p-[2px] ">
          <img
            className="h-[58px] w-[58px] rounded-full object-cover"
            // src={faker.image.avatar()}
            alt=""
          />
        </div>
      </div>
      <div className="story__desc">
        <div className="text-xs mt-[3px] text-gray-700 truncate w-[66px] ">
          Taranbeer singh{" "}
        </div>
      </div>
    </div>
  );
};

export default Story;
