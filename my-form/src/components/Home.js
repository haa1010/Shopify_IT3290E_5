import React, { Component } from 'react';
class Home extends Component {
    render() {
        return (
            <div>
                <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
  <div className="wrapper wrapper--w680">
    <div className="card card-4">
      <div className="card-body">
        <h2 className="title">Enter new/old product?</h2>
        <form method="POST">
          <div className="input-group">
            <label className="label" />
            <div className="p-t-10">
              <label className="radio-container m-r-45">
                <button className="btn btn--radius-2 btn--blue" type="submit"><a href="/new"> New </a></button>
              </label>
              <label className="radio-container">
                <button className="btn btn--radius-2 btn--blue" type="submit"><a href="/old"> Old </a></button>
              </label>
            </div>
          </div>
          {/* <div class="p-t-15">
                      <button class="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                  </div> */}
        </form>
      </div>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default Home;