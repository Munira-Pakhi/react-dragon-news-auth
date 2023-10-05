import { FaFacebook, FaGithub, FaGoogle, FaInstagram,  FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';


const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline btn-info w-full">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>
      <div className="  mb-6">
        <h2 className="text-3xl mb-4">Find Us on</h2>
        <a href="" className="flex p-4  text-lg items-center border rounded-t-lg">
            <FaFacebook className="mt-1 text-sky-500 mr-3"></FaFacebook>
            facebook
        </a>
        <a href="" className="flex p-4  text-lg items-center border-x ">
            <FaTwitter className="mt-1 text-sky-500 mr-3"></FaTwitter>
            twitter
        </a>
        <a href="" className="flex p-4  text-lg items-center border rounded-b-lg">
            <FaInstagram className="mt-1 text-sky-500 mr-3"></FaInstagram>
            instagram
        </a>
      </div>
      {/* q zone */}
      <div className=" space-y-4 mb-6">
        <h2 className="text-3xl">Q Zone</h2>
        <div className="bg-[#F3F3F3] p-4">
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
