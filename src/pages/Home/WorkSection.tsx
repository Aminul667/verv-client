// import iconUserOctagon from "../../assets/images/icon-user-octagon.png";
// import iconSmartHome from "../../assets/images/icon-smart-home.png";
import imageTrusted from "../../assets/images/image-trusted.jpg";

const WorkSection = () => {
  // const backgroundImageStyle = {
  //   backgroundImage: `url(${imageTrusted})`,
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   backgroundColor: "lightcyan",
  //   width: "591.756px",
  //   height: "384.534px",
  // };

  return (
    <section className="mx-auto mt-[100px]">
      <div className="flex items-center justify-between">
        <div className="w-[520px]">
          <h3 className="text-textColor font-semibold text-2xl leading-6 mb-4">
            HOW IT WORKS
          </h3>
          <h2 className="text-textColorPrimary text-[32px] font-bold leading-8 mt-5">
            Your Trusted Partner in
          </h2>
          <h2 className="text-textColorPrimary text-[32px] font-bold leading-8 mb-8 mt-2">
            Property Management & Rentals
          </h2>
          <div className="flex items-center justify-center px-8 py-[41px] rounded-lg shadow-lg gap-6">
            <div>
              {/* <img src={iconUserOctagon} alt="" className="w-[40px] h-[44px]" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="48"
                viewBox="0 0 44 48"
                fill="none"
              >
                <path
                  d="M42 16.4712V31.5289C42 33.9945 40.6791 36.284 38.5437 37.5388L25.4672 45.0897C23.3318 46.3225 20.6901 46.3225 18.5327 45.0897L5.45625 37.5388C3.32086 36.306 2 34.0165 2 31.5289V16.4712C2 14.0056 3.32086 11.716 5.45625 10.4612L18.5327 2.91026C20.6681 1.67746 23.3098 1.67746 25.4672 2.91026L38.5437 10.4612C40.6791 11.716 42 13.9835 42 16.4712Z"
                  stroke="#449A2B"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.0111 21.7988C24.8441 21.7988 27.1404 19.5022 27.1404 16.6693C27.1404 13.8365 24.8441 11.5401 22.0111 11.5401C19.1783 11.5401 16.8818 13.8365 16.8818 16.6693C16.8818 19.5022 19.1783 21.7988 22.0111 21.7988Z"
                  stroke="#449A2B"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.8166 34.259C30.8166 30.2964 26.876 27.0823 22.0108 27.0823C17.1456 27.0823 13.2051 30.2964 13.2051 34.259"
                  stroke="#449A2B"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-textColor text-2xl font-semibold">
                Streamlined for Landlords
              </h3>
              <p className="text-lg leading-[150%] text-textColorSecondary">
                Manage listings, message tenants, see reviews, reference check,
                and create a tenancy from a simple dashboard.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center px-8 py-[28px] rounded-lg shadow-lg gap-6 mt-8">
            <div>
              {/* <img src={iconSmartHome} alt="" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
              >
                <path
                  d="M30.5308 39.5315H19.1275C18.3734 39.5315 17.7481 38.9061 17.7481 38.152C17.7481 37.398 18.3734 36.7726 19.1275 36.7726H30.5308C32.4988 36.7726 34.43 35.1355 34.761 33.1859L37.2072 18.5458C37.4279 17.2215 36.6924 15.3269 35.6624 14.4993L22.9164 4.31005C21.445 3.13294 18.9988 3.13293 17.5458 4.29164L4.79992 14.4993C3.75155 15.3453 3.03425 17.2215 3.25496 18.5458L3.76995 21.6539C3.89869 22.408 3.38373 23.1253 2.62964 23.2357C1.87555 23.3828 1.17666 22.8494 1.04792 22.0953L0.53293 19.0056C0.14669 16.725 1.25025 13.8005 3.07109 12.3475L15.817 2.13967C18.2815 0.153291 22.1623 0.171701 24.6452 2.15808L37.3911 12.3475C39.1936 13.8005 40.2971 16.725 39.9293 19.0056L37.4831 33.6457C36.9313 36.9012 33.823 39.5315 30.5308 39.5315Z"
                  fill="#449A2B"
                />
                <path
                  d="M7.3575 39.8811C6.60341 39.8811 5.99647 39.2742 5.97807 38.5385C5.9229 36.0555 4.286 34.4186 1.80303 34.3634C1.04894 34.345 0.441976 33.7197 0.460368 32.9472C0.478761 32.1931 1.08571 31.6046 1.83979 31.6046H1.87656C5.83092 31.6965 8.66336 34.5105 8.73693 38.4649C8.75532 39.219 8.14835 39.8627 7.39427 39.8811C7.37587 39.8811 7.37589 39.8811 7.3575 39.8811Z"
                  fill="#449A2B"
                />
                <path
                  d="M12.8752 39.8811C12.1211 39.8811 11.4958 39.2741 11.4958 38.52C11.4774 37.3061 11.275 36.1474 10.9072 35.0623C9.96919 32.377 7.96442 30.3904 5.27914 29.434C4.19399 29.0478 3.03527 28.8456 1.82137 28.8456C1.06729 28.8456 0.441964 28.2203 0.460357 27.4478C0.460357 26.6937 1.0857 26.0868 1.83978 26.0868H1.85818C3.38474 26.1052 4.83772 26.3627 6.19875 26.8409C9.67491 28.0732 12.2682 30.6665 13.5005 34.1426C13.9787 35.5037 14.2362 36.9751 14.2546 38.4832C14.2546 39.2557 13.6477 39.8811 12.8752 39.8811Z"
                  fill="#449A2B"
                />
                <path
                  d="M1.83924 40.3409C0.809264 40.3409 0 39.5132 0 38.5017C0 37.4901 0.827656 36.6624 1.83924 36.6624C2.85082 36.6624 3.67847 37.4901 3.67847 38.5017C3.67847 39.5132 2.86921 40.3409 1.83924 40.3409Z"
                  fill="#449A2B"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-textColor text-2xl font-semibold">
                Empowered Tenants
              </h3>
              <p className="text-lg leading-[150%] text-textColorSecondary">
                Access verified listings, view Landlord reviews, directly
                contact Landlords, enjoy transparent terms, and make secure
                payments all in one place.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[591.756px] h-[572px] flex flex-col items-center justify-center">
          <img
            src={imageTrusted}
            alt="trusted-partner"
            className="w-[591.756px] h-[384.534px] rounded-[30.568px] shadow-[4.076px_10.189px_30.568px_rgba(0,0,0,0.15)]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="71"
            viewBox="0 0 72 71"
            fill="none"
            className="-mt-6 -z-10"
          >
            <circle
              opacity="0.5"
              cx="35.939"
              cy="35.9036"
              r="35.0937"
              transform="rotate(-150 35.939 35.9036)"
              fill="url(#paint0_linear_148_1006)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_148_1006"
                x1="35.939"
                y1="0.809906"
                x2="35.939"
                y2="70.9973"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#50B533" />
                <stop offset="1" stop-color="#50B533" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
