import React from "react";

export default function BookBlog() {
  return (
    <section className="p-b-0">
      <div className="container">
        <div className="heading-text heading-section text-center">
          <h2>Media and Educational Contributions</h2>
          <br />
          <p>
            <b>Books</b>
          </p>
          <br />
          <br />
        </div>
      </div>
      <section className="no-padding equalize" data-equalize-item=".text-box">
        <div className="row col-no-margin">
          {/*Box 1*/}
          <div className="col-lg-3" style={{ backgroundColor: "#39B24B" }}>
            <div className="text-box">
              <a href="https://www.goodreads.com/en/book/show/16648999-neuroinvesting">
                {" "}
                <i className="icon-book-open" />
                <h3>Neuroinvesting</h3>
                <p>Build a New Investing Brain</p>
              </a>
            </div>
          </div>
          {/*End: Box 1*/}
          {/*Box 2*/}
          <div className="col-lg-3" style={{ backgroundColor: "#56B847" }}>
            <div className="text-box">
              <a href="https://optionswise.wordpress.com/about/">
                {" "}
                <i className="icon-book-open" />
                <h3>OptionsWise </h3>
                <p>How to invest sensibly</p>
              </a>
            </div>
          </div>
          {/*End: Box 2*/}
          {/*Box 3*/}
          <div className="col-lg-3" style={{ backgroundColor: "#8BC73F" }}>
            <div className="text-box">
              <a href="http://www.eslite.com/Search_BW.aspx?query=Wai-Yee+Chen">
                {" "}
                <i className="icon-link-2" />
                <h3>OptionsWise</h3>
                <p>Extra Links</p>
              </a>
            </div>
          </div>
          {/*End: Box 3*/}
          {/*Box 4*/}
          <div className="col-lg-3" style={{ backgroundColor: "#A3CF39" }}>
            <div className="text-box">
              <a href="https://www.scribd.com/author/233594588/Wai-Yee-Chen/books-authored">
                {" "}
                <i className="icon-link-2" />
                <h3>OptionsWise</h3>
                <p>Extra Links</p>
              </a>
            </div>
          </div>
          {/*End: Box 4*/}
        </div>
      </section>
    </section>
  );
}
