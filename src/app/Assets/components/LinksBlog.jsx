import React from "react";

export default function LinksBlog() {
  return (
    <section className="p-b-0">
      <div className="container">
        <div className="heading-text heading-section text-center">
          <h2>Media and Educational Contributions</h2>
          <br />
          <p>
            <b>Investing and Psychology</b>
          </p>
        </div>
      </div>
      <section className="no-padding equalize" data-equalize-item=".text-box">
        <div className="row col-no-margin">
          {/*Box 1*/}
          <div className="col-lg-3">
            <div className="text-box hover-effect text-dark">
              <a href="https://www.smh.com.au/money/the-emotional-side-of-investing-20100910-154t4.html">
                {" "}
                <i className="fa fa-paper-plane" />
                <h3>The Emotional Side of Investing</h3>
                <p>Click Here for Details</p>
              </a>
            </div>
          </div>
          {/*End: Box 1*/}
          {/*Box 2*/}
          <div className="col-lg-3">
            <div className="text-box hover-effect text-dark">
              <a href="https://www.afr.com/wealth/protection-comes-in-different-forms-20100821-j5pko">
                {" "}
                <i className="icon-lock" />
                <h3>Protection comes in different forms </h3>
                <p>Click Here for Details</p>
              </a>
            </div>
          </div>
          {/*End: Box 2*/}
          {/*Box 3*/}
          <div className="col-lg-3">
            <div className="text-box hover-effect text-dark">
              <a href="http://www.financialobserver.com.au/articles/neuro-investing-approach-vital-in-aust">
                {" "}
                <i className="icon-activity" />
                <h3>Neuro-investing approach</h3>
                <p>Click Here for Details</p>
              </a>
            </div>
          </div>
          {/*End: Box 3*/}
          {/*Box 4*/}
          <div className="col-lg-3">
            <div className="text-box hover-effect text-dark">
              <a href="https://www.asx.com.au/education/investor-update-newsletter/201403-how-your-money-personality-affects-your-share-investing.htm">
                {" "}
                <i className="icon-book" />
                <h3>ASXBlog</h3>
                <p>Click Here for Details</p>
              </a>
            </div>
          </div>
          {/*End: Box 4*/}
        </div>
      </section>
    </section>
  );
}
