import Navigation from "./Navigation";
import MainBoard from "../components/MainBoard";
import { useRecoilState } from "recoil";
import { userNo } from "../store/user";

function MainPage() {
  const [user] = useRecoilState(userNo);

  console.log(user);

  return (
    <>
      <Navigation />
      <MainBoard />
    </>
  );
}

export default MainPage;
