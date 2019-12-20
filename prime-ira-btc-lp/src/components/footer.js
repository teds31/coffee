import React from "react"
import FooterBg from "./FooterBg"
import BtnTang from "./BtnTang"
import BtnWhiteOutline from "./BtnOutlineWhite"

export default function footer() {
  return (
    <>
      <FooterBg>
        <footer className="footer">
          <div className="container">
            <div className="row justify-content-center my-5">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mb-5">Ready To Get Started?</h2>
                <BtnTang text="Open An Account" />
              </div>
            </div>
            <div className="row justify-content-center my-5">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mb-5">Have More Questions?</h2>
                <BtnWhiteOutline text="Open An Account" />
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <p className="text-muted text-white">
                Prime Trust © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </footer>
      </FooterBg>
    </>
  )
}
