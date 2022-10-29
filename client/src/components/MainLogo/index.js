// eslint-disable-next-line no-unused-vars
import mainLogo from "../../assets/image/logo.png";

import LogoStyle from "./Logo.module.css";

const MainLogo = () => (
    <div className={LogoStyle.wrapper}>
        <div className={[LogoStyle.logoText, LogoStyle.leftText].join(" ")}>
            Watch
        </div>
        {/* Comment for pHub effect */}
        <img src={mainLogo} className={LogoStyle.logoImg} alt="logo" />
        <div className={[LogoStyle.logoText, LogoStyle.rightText].join(" ")}>
            It
        </div>
    </div>
);

export default MainLogo;
