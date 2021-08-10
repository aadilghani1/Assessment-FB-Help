import Tilt from "react-parallax-tilt";
function Landing() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Tilt>
        <div className="flex flex-col justify-center items-center space-y-14 bg-gray-600 bg-opacity-10 px-32 py-20 rounded-md">
          <div className="flex flex-col justify-center items-center">
            <img
              className="h-20 w-20"
              src="https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png"
              alt=""
              loading="lazy"
            />
            <h3 className="text-xl font-semibold">Facebook Helpdesk</h3>
          </div>

          <a
            className="px-3 py-3 bg-blue-500 rounded-md text-white hover:bg-opacity-80"
            href="http://localhost:8080/facebook/callback"
          >
            Login with Facebook
          </a>
        </div>
      </Tilt>
    </div>
  );
}

export default Landing;
