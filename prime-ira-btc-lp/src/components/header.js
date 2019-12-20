import React from "react"
import HeaderImage from "./HeaderImage"
import HeaderBannerImg from "./HeaderBannerImg"
import HeaderValueProp from "./HeaderValueProp"
import BtnTang from "./BtnTang"
import BtnWhiteOutline from "./BtnOutlineWhite"
import HeaderBg from "./HeaderBg"

const Header = () => (
  <>
    <HeaderBg>
      <header>
        <div className="container pt-3">
          <div className="row justify-content-end align-items-center">
            <div className="col-lg-5 pb-5">
              <HeaderBannerImg />
              <HeaderValueProp />
              <span className="d-flex flex-row">
                <BtnTang text="open an account" />
                <span className="mx-4"></span>
                <BtnWhiteOutline text="how does it work?" />
              </span>
            </div>
            <div className="col-lg-5 pb-5">
              <HeaderImage />
            </div>
          </div>
        </div>
      </header>
    </HeaderBg>
  </>
)

export default Header
