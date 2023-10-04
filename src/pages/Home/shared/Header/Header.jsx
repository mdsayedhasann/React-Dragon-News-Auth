import moment from "moment/moment";
import logo from "../../../../assets/logo.png";
import BreakingNews from "../BreakingNews/BreakingNews";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center py-2">
        <div>
          <img src={logo} alt="" />
          <p className="text-center py-6 text-[#706F6F] text-xl">
            Journalism Without Fear or Favour
          </p>
          <p className="text-center text-[#706F6F] text-base">
            {moment().format("dddd, MMMM D, YYYY")}
          </p>
        </div>
      </div>
      <BreakingNews></BreakingNews>
    </div>
  );
};

export default Header;
