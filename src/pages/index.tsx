import Web from "@/components/web";
import Phone from "@/components/phone";
function index(props: { connectWallet: () => void ,addressName:any}) {
  return (
    <>
      <Web></Web>
      <Phone connectWallet={props.connectWallet} addressName = {props.addressName}></Phone>
    </>
  );
}

export default index;
