import React from 'react';
class Letter extends React.Component {



    render() {
        return (
            <div>


                <div id="newsletter" className="section">

                    <div className="container">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="newsletter">
                                    <p> Đăng ký để nhận <strong>thông tin mới nhất</strong></p>
                                    <form>
                                        <input className="input" type="email"   laceholder="Enter Your Email" />
                                        <button className="newsletter-btn" ><i className="fa fa-envelope"></i> Theo dõi</button>
                                    </form>
                                    <ul className="newsletter-follow">
                                        <li>
                                           <i className="fa fa-facebook"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-twitter"></i>
                                        </li>
                                        <li>
                                           <i className="fa fa-instagram"></i>
                                        </li>
                                        <li>
                                           <i className="fa fa-pinterest"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        )
    }
}

export default Letter;