import facebook from "../../images/icon-facebook.svg";
import pinterest from "../../images/icon-pinterest.svg";
import twitter from "../../images/icon-twitter.svg";

function Share() {
  return (
    <div>
      <div>
        <div className="group">
          <h1>Share</h1>
          <img className="icons" src={facebook} alt="facebook logo" />
          <img className="icons" src={pinterest} alt="pinterest logo" />
          <img className="icons" src={twitter} alt="twitter logo" />
        </div>
      </div>
    </div>
  );
}

export default Share;
