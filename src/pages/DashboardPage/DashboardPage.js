import RewardTracker from "../../components/RewardTracker/RewardTracker";
import Voucher from "../../components/Voucher/Voucher";
import Carousel from "../../components/Carousel/Carousel";
import "./DashboardPage.scss";

const DashboardPage = () => {
  return (
    <main className="main">
      <h2 className="main__greeting">Good morning, Johnny</h2>
      <RewardTracker />
      <div className="main__container-divider"></div>
      <Voucher />
      <div className="main__container-divider"></div>
      <Carousel />
    </main>
  );
};

export default DashboardPage;
