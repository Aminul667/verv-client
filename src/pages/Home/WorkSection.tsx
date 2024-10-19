import iconUserOctagon from "../../assets/images/icon-user-octagon.png";
import iconSmartHome from "../../assets/images/icon-smart-home.png";
import imageTrusted from "../../assets/images/image-trusted.png";

const WorkSection = () => {
  return (
    <section className="mx-auto">
      <div className="mt-14 flex items-center justify-between">
        <div className="w-[520px]">
          <h3 className="text-textColor font-semibold text-2xl leading-6">
            HOW IT WORKS
          </h3>
          <h2 className="text-textColorPrimary text-[32px] font-bold leading-8 mt-5">
            Your Trusted Partner in
          </h2>
          <h2 className="text-textColorPrimary text-[32px] font-bold leading-8">
            Property Management & Rentals
          </h2>
          <div className="flex items-center justify-center px-5 py-3 rounded-lg mt-5 shadow-lg">
            <div className="mr-4">
              <img src={iconUserOctagon} alt="" />
            </div>
            <div>
              <h3 className="text-textColor text-2xl font-semibold">
                Streamlined for Landlords
              </h3>
              <p className="text-lg leading-7">
                Manage listings, tenants, rent, & maintenance from one
                easy-to-use dashboard.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center px-5 py-3 rounded-lg mt-5 shadow-lg">
            <div className="mr-4">
              <img src={iconSmartHome} alt="" />
            </div>
            <div>
              <h3 className="text-textColor text-2xl font-semibold">
                Empowered Tenants
              </h3>
              <p className="text-lg leading-7">
                Access verified listings, transparent terms, and handle all
                rental tasks in one place.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={imageTrusted} alt="trusted-partner" />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
