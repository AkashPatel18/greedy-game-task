import "./applayout.css";
import AllInfo from "./allInfo";
import { Link } from "react-router-dom";

const AppLayout = (props) => {
  return (
    <>
      <div className="appBox">
        <div className="headFlex">
          <div className="companyName">
            <h3>{props.name}</h3>
            <p>{props.publisher}</p>
          </div>
          <div className="goto">
            {/* <button className="gotoBtn"> */}
            <Link to="/all-stats">
              <h1 className="unicode">→</h1>
            </Link>
            {/* </button> */}
          </div>
        </div>

        <div>
          <div className="informationFlex">
            <div className="information">
              <p>Revenue</p>
              <h3>$345</h3>
            </div>
            <div className="information">
              <p>Ad Request</p>
              <h3>34M</h3>
            </div>
            <div className="information">
              <p>Ad Response</p>
              <h3>10M</h3>
            </div>
            <div className="information">
              <p>Impressions</p>
              <h3>10M</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
