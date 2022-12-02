import RewardTracker from "../../components/RewardTracker/RewardTracker";
import Voucher from "../../components/Voucher/Voucher";
import Carousel from "../../components/Carousel/Carousel";
import "./DashboardPage.scss";

const DashboardPage = () => {
  return (
    <main className="main">
      <RewardTracker />
      <div className="main__container-divider"></div>
      <Voucher />
      <div className="main__container-divider"></div>
      <Carousel />
    </main>
  );
};

export default DashboardPage;
