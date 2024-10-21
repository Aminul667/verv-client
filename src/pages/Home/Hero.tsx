import { z } from "zod";
import heroImage from "../../assets/images/hero-image.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoSearchOutline } from "react-icons/io5";

// Zod schema for form validation
const searchSchema = z.object({
  transactionType: z.enum(["rent", "buy"]),
  location: z.string().min(1, "Location is required"),
});

// interface for the form inputs
interface SearchFormInputs {
  transactionType: "rent" | "buy";
  location: string;
}

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "lightcyan",
    width: "1216px",
    height: "600px",
  };

  // react-hook-form using Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchSchema),
  });

  // Handle form submission with typed data
  const onSubmit: SubmitHandler<SearchFormInputs> = (data) => {
    console.log(data);
    if (errors.location) {
      alert(errors.location?.message);
    }
  };

  return (
    <header
      style={backgroundImageStyle}
      className="container mx-auto flex flex-col justify-center h-full text-center w-full items-center mt-6 bg-red-400 rounded-3xl"
    >
      <div className="text-5xl text-textColorPrimary font-bold drop-shadow-2xl">
        <h2>Landlords & Tenants, Connected Through</h2>
        <h2>Peer-to-Peer Networking.</h2>
      </div>

      {/* search form create a new component if needed*/}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center bg-textColorPrimary p-3 rounded-lg space-x-4 my-10"
      >
        {/* dropdown input field */}
        <select
          {...register("transactionType")}
          defaultValue="rent"
          className="bg-white p-2 pr-6 rounded-md"
        >
          <option value="rent">Rent</option>
          <option value="buy">Buy</option>
        </select>

        {/* Location input field */}
        <input
          type="text"
          placeholder="e.g. Oxford or NW3"
          {...register("location")}
          className="flex-grow p-2 rounded-md focus:outline-none"
        />

        {/* Show validation error */}
        {errors.location && (
          <p className="text-red-500 text-sm">{errors.location?.message}</p>
        )}

        <div className="flex items-center content-between gap-3 btn p-2 px-6 rounded-md hover:text-white">
          <IoSearchOutline />
          <button type="submit">Search</button>
        </div>
      </form>

      <p className="text-white text-lg -mt-2">
        Want more visibility?{" "}
        <span className="text-textColor">List with Verv.</span>
      </p>
    </header>
  );
};

export default Hero;
