import Hero from "./Hero";
import WorkSection from "./WorkSection";
import popularCardImage from "../../assets/images/popular-card-image.jpg";
import IProperty from "../../types/home";
import PropertyCard from "./PropertyCard";

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

const Home = () => {
  return (
    <div>
      <Hero />
      <WorkSection />
      <div>
        {popularCardData.map((item) => (
          <PropertyCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
