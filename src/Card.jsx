import iconMusic from "./assets/icon-music.svg";
import hero from "./assets/illustration-hero.svg";

function Card() {
  return (
    <div className="bg-white rounded-2xl w-96">
      <div>
        <img src={hero} alt="hero" className="rounded-t-2xl" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="text-center w-4/5 mb-5">
          <h1 className="text-Dark-blue text-2xl font-black capitalize mt-9 mb-4">
            order summery
          </h1>
          <p className="text-gray-500 font-semibold">
            you can now listen to millions of songs audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>

        <div className="bg-Very-pale-blue flex justify-between p-4 rounded-lg w-4/5 ">
          <div className="flex gap-3">
            <img src={iconMusic} alt="music" />
            <div className="">
              <h3 className="font-bold capitalize">annual plan</h3>
              <p className="text-gray-600 font-semibold">$59.99/year</p>
            </div>
          </div>

          <button className="capitalize underline text-bright-blue font-bold text-sm">
            change
          </button>
        </div>

        <div className="flex flex-col w-4/5">
          <button className="bg-bright-blue text-white rounded-lg py-2 my-6 font-medium text-sm capitalize hover:bg-Dark-blue transition-all duration-300">
            proceed to payment
          </button>
          <button className="mb-8 font-bold capitalize text-sm text-gray-400 transition-all duration-300 hover:text-Dark-blue">
            cancel order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
