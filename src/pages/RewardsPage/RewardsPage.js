import ChosenReward from "../../components/ChosenReward/ChosenReward";
import OtherRewards from "../../components/OtherRewards/OtherRewards";
import EVoucher from "../../components/EVoucher/EVoucher";
import "./RewardsPage";

const RewardsPage = () => {
  return (
    <main className="main">
      <ChosenReward />
      <div className="main__container-divider"></div>
      <OtherRewards />
      <div className="main__container-divider"></div>
      <EVoucher />
    </main>
  );
};

export default RewardsPage;
