/* eslint-disable @typescript-eslint/no-explicit-any */
import starIcon from "../../assets/images/star-icon.svg";
import iconHeart from "../../assets/images/icon-heart.svg";
import iconBed from "../../assets/images/icon-bed.svg";
import iconBath from "../../assets/images/icon-bath.svg";
import iconSquareMeter from "../../assets/images/icon-square-meter.svg";

const PropertyCard = ({ item }: any) => {
  console.log(item);

  const backgroundImageStyle = {
    backgroundImage: `url(${item.image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "lightgray",
  };

  return (
    <div className="w-[384px] rounded-[24px] bg-white shadow-md mb-1">
      <div
        style={backgroundImageStyle}
        className="w-[384px] h-[200px] rounded-t-[24px] rounded-b-none relative"
      >
        <div className="w-32 h-8 text-white text-xs font-inter font-semibold absolute -bottom-4 -left-2 rounded-lg bg-colorButton flex items-center justify-center gap-1">
          <img src={starIcon} alt="starIcon" />
          <p className="">POPULAR</p>
        </div>
      </div>

      <div className="mt-8 px-6 pb-8">
        <div className="flex justify-between items-center">
          <p>
            <span className="text-2xl font-semibold text-textColor leading-[150%]">
              &#163;{item.pricePerMonth}
            </span>
            <span className="opacity-50">/month</span>
          </p>
          <div className="p-[10px] rounded-full border border-colorButton">
            <img
              src={iconHeart}
              alt="iconHeart"
              className="w-[20px] h-[20px]"
            />
          </div>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-textColorPrimary leading-[150%]">
          {item.title}
        </h2>
        <p className="text-base font-normal text-textColorSecondary leading-[150%] mt-1">
          {item.address.street}, {item.address.city}, {item.address.state}
        </p>
        <div className="w-[336px] border border-[#EAEDEF] my-2"></div>

        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-1">
            <img src={iconBed} alt="iconBed" />
            <span className="text-sm font-normal text-textColorSecondary leading-[120%]">
              {item.features.beds} Beds
            </span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <img src={iconBath} alt="iconBed" />
            <span className="text-sm font-normal text-textColorSecondary leading-[120%]">
              {item.features.bathrooms} Bathrooms
            </span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <img src={iconSquareMeter} alt="iconBed" />
            <span className="text-sm font-normal text-textColorSecondary leading-[120%]">
              {item.features.size.width}x{item.features.size.length} m
              <sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
