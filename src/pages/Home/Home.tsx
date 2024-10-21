import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "./Hero";
import WorkSection from "./WorkSection";
import popularCardImage from "../../assets/images/popular-card-image.jpg";
import ellipse1 from "../../assets/images/ellipse-1.png";
import ellipse2 from "../../assets/images/ellipse-2.png";
import ellipse3 from "../../assets/images/ellipse-3.png";
import ellipse4 from "../../assets/images/ellipse-4.png";
import ellipse5 from "../../assets/images/ellipse-5.png";
import ellipse6 from "../../assets/images/ellipse-6.png";
import iconStar from "../../assets/images/icon-star.svg";
import iconStarWhite from "../../assets/images/icon-star-white.svg";
import rightEllipse from "../../assets/images/right-ellipse.jpg";

import IProperty from "../../types/home";
import PropertyCard from "./PropertyCard";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextArrow, PreviousArrow } from "../../utils/Arrows";

const imageList = [ellipse2, ellipse3, ellipse4, ellipse5, ellipse6];

const popularCardData: IProperty[] = [
  {
    id: 1,
    title: "Palm Harbor",
    address: {
      street: "2699 Green Valley",
      city: "Highland Lake",
      state: "FL",
    },
    pricePerMonth: 2095,
    currency: "GBP",
    status: "POPULAR",
    features: {
      beds: 3,
      bathrooms: 2,
      size: {
        width: 5,
        length: 7,
        unit: "m²",
      },
    },
    image: popularCardImage,
  },
  {
    id: 2,
    title: "Palm Harbor",
    address: {
      street: "2699 Green Valley",
      city: "Highland Lake",
      state: "FL",
    },
    pricePerMonth: 2095,
    currency: "GBP",
    status: "POPULAR",
    features: {
      beds: 3,
      bathrooms: 2,
      size: {
        width: 5,
        length: 7,
        unit: "m²",
      },
    },
    image: popularCardImage,
  },
  {
    id: 3,
    title: "Palm Harbor",
    address: {
      street: "2699 Green Valley",
      city: "Highland Lake",
      state: "FL",
    },
    pricePerMonth: 2095,
    currency: "GBP",
    status: "POPULAR",
    features: {
      beds: 3,
      bathrooms: 2,
      size: {
        width: 5,
        length: 7,
        unit: "m²",
      },
    },
    image: popularCardImage,
  },
  {
    id: 3,
    title: "Palm Harbor",
    address: {
      street: "2699 Green Valley",
      city: "Highland Lake",
      state: "FL",
    },
    pricePerMonth: 2095,
    currency: "GBP",
    status: "POPULAR",
    features: {
      beds: 3,
      bathrooms: 2,
      size: {
        width: 5,
        length: 7,
        unit: "m²",
      },
    },
    image: popularCardImage,
  },
];

// Zod schema for form validation
const emailSubmitSchema = z.object({
  email: z.string().min(1, "Email is required"),
});

// interface for the form inputs
interface emailSubmitFormInputs {
  email: string;
}

const Home = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
  };

  // react-hook-form using Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<emailSubmitFormInputs>({
    resolver: zodResolver(emailSubmitSchema),
  });

  const onSubmit: SubmitHandler<emailSubmitFormInputs> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Hero />

      {/* below hero section */}
      <section className="px-24 pt-14 flex justify-between items-center">
        <div className="rounded-[56px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-[500px] h-[180px] px-[58px] py-[18px]">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center">
              <img src={ellipse1} alt="" />
              {imageList.map((image) => (
                <img
                  key={imageList.indexOf(image)}
                  src={image}
                  className="-ml-5"
                />
              ))}
              <p className="-ml-6 text-white">+</p>
            </div>
            <div>
              <h2 className="text-[32px] font-semibold text-textColor leading-[120%%]">
                72k+
              </h2>
              <p className="font-semibold text-textColorSecondary">
                Happy Customers!
              </p>
            </div>
          </div>
          <div className="w-[384.003px] h-[1.206px] bg-[#314660] opacity-10 my-4"></div>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex justify-between items-center">
                <img src={iconStar} alt="iconStar" />
                <h3 className="text-xl text-[#00AD6F] font-semibold leading-[150%%]">
                  Trustpilot
                </h3>
              </div>
              <p className="text-[12px] font-semibold text-textColorSecondary text-right">
                Rated Excellent
              </p>
            </div>
            <div>
              <div className="flex gap-1">
                <div className="bg-[#00AD6F] w-[26.555px] h-[26.555px] flex justify-center items-center rounded-[2.213px]">
                  <img src={iconStarWhite} alt="iconStar" />
                </div>
                <div className="bg-[#00AD6F] w-[26.555px] h-[26.555px] flex justify-center items-center rounded-[2.213px]">
                  <img src={iconStarWhite} alt="iconStar" />
                </div>
                <div className="bg-[#00AD6F] w-[26.555px] h-[26.555px] flex justify-center items-center rounded-[2.213px]">
                  <img src={iconStarWhite} alt="iconStar" />
                </div>
                <div className="bg-[#00AD6F] w-[26.555px] h-[26.555px] flex justify-center items-center rounded-[2.213px]">
                  <img src={iconStarWhite} alt="iconStar" />
                </div>
                <div
                  style={{ backgroundColor: "rgba(0, 173, 111, 0.30)" }}
                  className="w-[26.555px] h-[26.555px] flex justify-center items-center rounded-[2.213px]"
                >
                  <img src={iconStarWhite} alt="iconStar" />
                </div>
                <p className="text-xl font-bold text-[#00AD6F]">5</p>
              </div>
              <p className="text-[12px] font-semibold text-textColorSecondary">
                Verified Company - 5% 5-Star Rating
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[56px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-[500px] h-[180px] px-[105px] py-[50px]">
          <div className="flex justify-between items-center gap-4">
            <div className="w-[88px] h-[88px]">
              <img
                src={rightEllipse}
                alt="house"
                className="w-[88px] h-[88px] rounded-full"
              />
            </div>
            <div>
              <h2 className="text-[32px] font-semibold leading-[120%] text-textColor">
                200+
              </h2>
              <p className="font-semibold text-textColorSecondary">
                New Listings Everyday!
              </p>
            </div>
          </div>
        </div>
      </section>

      <WorkSection />

      {/* add carusel to the cards and next button*/}
      <section className="mt-[100px]">
        <h3 className="text-xl font-semibold text-textColor mb-4">
          PROPERTIES IN DEMAND
        </h3>
        <div className="flex justify-between items-center mb-8">
          <div className="w-[800px]">
            <h2 className="text-3xl font-semibold text-textColorPrimary leading-[120%]">
              Current Trending Properties Available
            </h2>
            <p className="text-lg leading-[150% mt-1 text-textColorSecondary]">
              Discover our most in-demand properties, showcasing prime
              locations, competitive prices, and modern amenities. Browse our
              handpicked selection to find your perfect home or room today.
            </p>
          </div>
          <div>
            <button className="btn px-4 py-2 border rounded-[32px]">
              Browse More Properties
            </button>
          </div>
        </div>
        {/* flex justify-between items-center */}
        <div>
          <Slider {...settings} className="flex items-center justify-center">
            {popularCardData.map((item) => (
              <PropertyCard key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </section>

      {/* are you a land lord */}
      <section className="mt-[100px] bg-[#D5EDCE] shadow-[0px_4px_200px_0px_rgba(232,249,247,0.20)] -mx-36 py-20 flex items-center justify-center">
        <div>
          <div className="text-center">
            <p className="text-xl font-semibold leading-[120%] text-textColor">
              No Spam Promise
            </p>
            <h2 className="text-5xl font-bold text-textColorPrimary my-2 leading-[120%%]">
              Are you a landlord?
            </h2>
            <p className="text-lg leading-[150%] text-textColorSecondary">
              Discover smarter ways to rent your property and get listed today.
            </p>
          </div>
          <div>
            <form
              action=""
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-between items-center bg-white p-1 border rounded-[40px] mt-8"
            >
              <input
                type="text"
                placeholder="Enter your email address"
                {...register("email")}
                className="flex-grow p-2 rounded-md focus:outline-none"
              />

              {/* Show validation error */}
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
              )}

              <div className="flex items-center content-between gap-3 btn py-2 px-10 rounded-[32px]">
                <button type="submit">Submit</button>
              </div>
            </form>
            <p className="text-sm font-semibold leading-[120%] text-center text-textColorSecondary mt-2">
              Join <span className="text-textColor">10,000+</span> other
              landlords in our Verv Community
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
