import { useAuth } from "../hooks/useAuth";

const ConnectWallet = () => {
  console.log(useAuth());
  return <div>login</div>;
};

export default ConnectWallet;
