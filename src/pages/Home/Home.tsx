import Hero from "./Hero";
import WorkSection from "./WorkSection";
import popularCardImage from "../../assets/images/popular-card-image.jpg";
import IProperty from "../../types/home";
import PropertyCard from "./PropertyCard";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
        <div className="flex justify-between items-center">
          {popularCardData.map((item) => (
            <PropertyCard key={item.id} item={item} />
          ))}
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
