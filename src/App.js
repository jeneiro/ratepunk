import "./App.scss";
import logoTag from "./assets/logo.svg";
import email from "./assets/email.svg";
import invite from "./assets/invite.svg";
import collectCoin from "./assets/collect-coins.svg";
import voucher from "./assets/voucher.svg";
import chrome from "./assets/chrome.svg";
import apple from "./assets/apple.svg";
import twitter from "./assets/twitter.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import linkdin from "./assets/linkedin.svg";
import tiktok from "./assets/tiktok.svg";
import emailfooter from "./assets/email-footer.svg";
import axios from "axios";
import success from "./assets/success.svg";
import menu from "./assets/menu.svg";
import close from "./assets/close.svg";
import { useEffect, useState } from "react";
function App() {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.+[a-z]{2,3}");
  const [payload, setPayload] = useState({});
  const [errorMsg, setErrorMsg] = useState(false);
  const [errorTxt, setErrorTxt] = useState("*Kindly enter a valid email address");
  const [referalLink, seReferalLink] = useState(
    "https://ratepunk.com/referral"
  ); //
  const [referal, setReferal] = useState(false);
  useEffect(() => {}, []);
  function handleChange(e) {
    var name = e.target.name;
    var value = e.target.value;
    setPayload((values) => ({ ...values, [name]: value }));
  }
  const headers = {
    "Content-Type": "application/json",
    "X-Master-Key":
      "$2b$10$gkit1jnegPr/O4DcrOyQEe3nne.zf1AaHN.kjSoIqGfapyD9q5PHe",
  };
  function submit() {
    const validateEmail = regex.test(payload.email);
    console.log(validateEmail);
    if (validateEmail) {
      axios
        .post("https://api.jsonbin.io/v3/b", payload, { headers: headers })
        .then((response) => {
          console.log(response);
          setReferal(true);
        })
        .catch((err) => {
          console.log(err);
          setErrorMsg(true);
          setErrorTxt("*Error communicating with server")
        });
    } else setErrorMsg(true);
  }
  return (
    <div className="App">
      <div className="navigation" style={{ zIndex: 30 }}>
        <input type="checkbox" id="navigation-check"></input>
        <div className="navigation-header">
          <img
            src={logoTag}
            alt="Logo"
            className="logo"
            //style={{ height: 32, marginLeft: 25, marginTop: 10, cursor:"pointer"}}
            onClick={() => {}}
          />
        </div>
        <div className="navigation-btn">
          <label htmlFor="navigation-check">
           
           
          </label>
        </div>

        <div className="navigation-links">
          <a target="_blank" style={{ cursor: "pointer" }}>
            Chrome Extension
          </a>
          <a target="_blank" style={{ cursor: "pointer" }}>
            Price Comparison
          </a>

          <a target="_blank" style={{ cursor: "pointer" }}>
            Blog
          </a>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 firstDiv">
            <h1 className="headerText">REFER FRIENDS AND GET REWARDS</h1>
            <p>
              Refer your friends to us and earn hotel booking vouchers. We'll
              give you 1 coin for each friend that installs our extension.
              Minimum cash-out at 20 coins.
            </p>
            {errorMsg && (
              <div style={{ color: "red" }}>
                {errorTxt}
              </div>
            )}
            {referal && (
              <div>
                <img src={success} alt="success" onClick={() => {}} />
                <b> Your email is confirmed!</b>
                <input
                  className="form-control email-input"
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  id="email"
                  value={referalLink || ""}
                  onChange={handleChange}
                ></input>
                <button type="button" id="btnToggle" className="copyButton">
                  Copy
                </button>
              </div>
            )}
            {!referal && (
              <div>
                <input
                  className="form-control email-input"
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  id="email"
                  value={payload.email || ""}
                  onChange={handleChange}
                ></input>
                <button type="button" id="btnToggle" class="emailIcon">
                  <img
                    src={email}
                    alt="email"
                    className="email"
                    //style={{ height: 32, marginLeft: 25, marginTop: 10, cursor:"pointer"}}
                    onClick={() => {}}
                  />
                </button>
                <button className="referalButton" onClick={submit}>
                  Get Referal Link
                </button>
              </div>
            )}
            <p style={{ marginTop: "80px" }}>Limits on max rewards apply.</p>
          </div>
          <div className="col-md-6 secondDiv">
            <div className="row">
              <div className="col-md-4">
                {" "}
                <img
                  src={invite}
                  alt="invite"
                  className="center-block"

                />
              </div>
              <div className="col-md-8 x">
                {" "}
                <h6>STEP 1</h6>
                <h5 className="sub">INVITE FRIENDS</h5>
                <p>Refer friends with your unique referral link.</p>
              </div>
            </div>
            <div className="row reverseCol" style={{ padding: 10 }}>
              <div className="col-md-8 x">
                {" "}
                <h6>STEP 2</h6>
                <h5 className="sub">COLLECT COINS</h5>
                <p>
                  Get 1 coin for each friend that installs our extension using
                  your referral link.
                </p>
              </div>
              <div className="col-md-4" style={{ paddingTop: "45px" }}>
                {" "}
                <img
                  src={collectCoin}
                  alt="Coin"
                  className="center-block"
                  //style={{ height: 32, marginLeft: 25, marginTop: 10, cursor:"pointer"}}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4" style={{ paddingTop: "45px" }}>
                {" "}
                <img
                  src={voucher}
                  alt="Voucher"
                  className="center-block"
                  //style={{ height: 32, marginLeft: 25, marginTop: 10, cursor:"pointer"}}
                />
              </div>
              <div className="col-md-8 x">
                {" "}
                <h6>STEP 3</h6>
                <h5 className="sub">GET VOUCHER</h5>
                <p>
                  Redeem for a $20 hotel booking voucher once you collect 20
                  coins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{}}>
        <div className="prefooter container-fluid">
          <div className="row ">
            <div>
              {" "}
              <div className="footer-cont">
                <img
                  src={chrome}
                  alt="email"
                  className="email"
                  style={{ float: "left", marginLeft: 25, cursor: "pointer" }}
                 
                  onClick={() => {
                    window.location =
                      "https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk";
                  }}
                />
                <a href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk">
                  <div className="storelinks">
                    available in the
                    <br />
                    <b> chrome web store</b>
                  </div>
                </a>
              </div>
              <div className="footer-cont">
                <img
                  src={apple}
                  alt="email"
                  className="email"
                  style={{ float: "left", marginLeft: 25, cursor: "pointer" }}
                  //style={{ height: 32, marginLeft: 25, marginTop: 10, cursor:"pointer"}}
                  onClick={() => {
                    window.location =
                      "https://apps.apple.com/app/ratepunk/id1607823726";
                  }}
                />
                <a href="https://apps.apple.com/app/ratepunk/id1607823726">
                  <div className="storelinks">
                    available in the
                    <br />
                    <b>apple app store</b>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-3 review-star">
              <span>★ ★ ★ ★ ★ Chrome Store reviews</span>
            </div>
          </div>
        </div>
        <div className="container-fluid footer">
          <div className="row footer-content ">
            <div className="col-md-6">
              <img
                src={logoTag}
                alt="Logo"
                style={{ marginBottom: "30px" }}
                onClick={() => {}}
              />
              <div>
                <p>
                  Ratepunk compares hotel room prices across the major online
                  travel agencies. When you search for a room, Ratepunk
                  extension scans the top booking sites and runs a price
                  comparison, so you can be confident in knowing you’re getting
                  the best deal!
                </p>
              </div>

              <div className="copy-right">
                © 2021 Ratepunk. All Rights Reserved.
              </div>
            </div>
            <div className="col-md-3 footerlinks">
              <h6>
                <b>QUICK LINKS</b>
              </h6>
              <ul>
                <li>
                  <a href="#">Price Comparison</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Chrome Extension</a>
                </li>
                <li>
                  <a href="#">How It Works</a>
                </li>
                <li>
                  <a href="#">Ratepunk Blog</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 ">
              {" "}
              <h6>
                <b>CONTACT</b>
              </h6>
              <div style={{ marginTop: "17px" }}>
                <img src={emailfooter} alt="Logo" onClick={() => {}} />{" "}
                hi@ratepunk.com
              </div>
              <h6 style={{ marginTop: "97px" }}>
                <b>SOCIAL</b>
              </h6>
              <div className="social-media row">
                <div className="social">
                  {" "}
                  <img src={instagram} alt="Logo" style={{cursor:"pointer"}} onClick={() => {
                    window.location ="#"}}  />
                </div>
                <div className="social">
                  {" "}
                  <img src={facebook} alt="Logo" style={{cursor:"pointer"}} onClick={() => {
                    window.location ="#"}}  />
                </div>
                <div className="social">
                  {" "}
                  <img src={linkdin} alt="Logo" style={{cursor:"pointer"}} onClick={() => {
                    window.location ="#"}}  />
                </div>
                <div className="social">
                  {" "}
                  <img src={twitter} alt="Logo" style={{cursor:"pointer"}} onClick={() => {
                    window.location ="#"}} />
                </div>
                <div className="social">
                  {" "}
                  <img src={tiktok} alt="Logo" style={{cursor:"pointer"}} onClick={() => {
                    window.location ="#"}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
