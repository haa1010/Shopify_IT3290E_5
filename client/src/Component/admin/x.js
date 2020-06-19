import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import axios from "axios"



const formValid = (formErrs, ...rest) => {
    let valid = true
    for (var key in formErrs) {
        formErrs[key].length > 0 && (valid = false)
    }
    rest.forEach(
        val => {
            val === null && (valid = false)
        }
    )
    return valid
}


class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            email: null,
            password: null,
            confirmPassword: null,
            flag: false,
            role: null,
            formErrors: {
                name: "Bạn chưa nhập tên",
                email: "Bạn chưa nhập email",
                password: "Bạn chưa nhập mật khẩu",
                confirmPassword: "Bạn chưa nhập lại mật khẩu",
                role: "Bạn chưa chọn chức năng"
            },
            error: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handle = this.handle.bind(this)
    }

    handleSubmit = async e => {
        e.preventDefault()
        if (formValid(this.state.formErrors, this.state.email, this.state.password)) {
            let data = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                role: this.state.role
            }
            const result = (
                await axios.post(`${config.SERVER}/signup`,
                    qs.stringify(data),
                    {
                        headers: {
                            'accept': 'application/json',
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    })
            ).data
            if (result) {
                this.props.history.push('/login')
            }
            else {
                this.setState({ error: "Email đã tồn tại" })
            }
        }
        else {
            this.setState({ flag: true })
        }
    }

    handle = e => {
        let { name, value } = e.target
        let formErrors = this.state.formErrors
        switch (name) {
            case "name":
                formErrors.name =
                    (value.length === 0) ? "Bạn chưa nhập tên"
                        : (value.length < 3) ? "Tên phải từ 3 kí tự trở lên"
                            : ""
                break
            case "email":
                formErrors.email =
                    (value.length === 0) ? "Bạn chưa nhập email"
                        : (emailRegex.test(value)) ? ""
                            : "Email không hợp lệ"
                break
            case "password":
                formErrors.password =
                    (value.length === 0) ? "Bạn chưa nhập mật khẩu"
                        : (value.length < 6) ? "Mật khẩu phải từ 6 kí tự trở lên"
                            : ""
                break
            case "confirmPassword":
                formErrors.confirmPassword =
                    (value.length === 0) ? "Bạn chưa nhập lại mật khẩu"
                        : (value !== this.state.password) ? "Mật khẩu nhập lại không khớp"
                            : ""
                break
            case "role":
                formErrors.role = ""
                break
        }
        this.setState({
            formErrors,
            [name]: value
        })
    }


    render() {
        const errStyle = { marginBottom: 2, fontSize: 14, color: "red", textAlign: "center" }
        return (
            <div className="LoginForm">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100" style={{ paddingTop: 70 }}>
                            <div className="login100-pic js-tilt">
                                <img src="/images/img-01.png" alt="IMG" />
                            </div>

                            <form className="login100-form validate-form" onSubmit={this.handleSubmit} autoComplete="off">
                                <span className="login100-form-title">
                                    Đăng kí
                                </span>

                                <div className="wrap-input100 validate-input" >
                                    <input
                                        className={(this.state.formErrors.name.length > 0 && this.state.flag) ? "input100 err" : "input100"}
                                        type="text"
                                        name="name"
                                        placeholder="Họ tên"
                                        onChange={this.handle} />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-user" ></i>
                                    </span>
                                </div>
                                {(this.state.formErrors.name.length > 0 && this.state.flag) && (<div style={errStyle}>{this.state.formErrors.name}</div>)}
                                <div className="wrap-input100 validate-input" >
                                    <input
                                        className={(this.state.formErrors.email.length > 0 && this.state.flag) ? "input100 err" : "input100"}
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        onChange={this.handle} />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" ></i>
                                    </span>
                                </div>
                                {(this.state.formErrors.email.length > 0 && this.state.flag) && (<div style={errStyle}>{this.state.formErrors.email}</div>)}
                                <div className="wrap-input100 validate-input">
                                    <input
                                        className={(this.state.formErrors.password.length > 0 && this.state.flag) ? "input100 err" : "input100"}
                                        type="password"
                                        name="password"
                                        placeholder="Mật khẩu"
                                        onChange={this.handle} />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-lock"></i>
                                    </span>
                                </div>
                                {(this.state.formErrors.password.length > 0 && this.state.flag) && (<div style={errStyle}>{this.state.formErrors.password}</div>)}

                                <div className="wrap-input100 validate-input" >
                                    <input
                                        className={(this.state.formErrors.confirmPassword.length > 0 && this.state.flag) ? "input100 err" : "input100"}
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Nhập lại mật khẩu"
                                        onChange={this.handle} />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-lock" ></i>
                                    </span>
                                </div>
                                {(this.state.formErrors.confirmPassword.length > 0 && this.state.flag) && (<div style={errStyle}>{this.state.formErrors.confirmPassword}</div>)}
                                <div style={{ textAlign: "center" }}>
                                    <div style={{fontFamily:"Poppins,sans-serif", padding:"10px 0px"}}>Đăng kí với chức năng</div>
                                </div>
                                <div className="wrap-input100 validate-input">
                                    <table width="100%">
                                        <tr>
                                            <td>
                                                <input type="radio" name="role" id="freelancer" value="freelancer" onChange={this.handle} />
                                                <label htmlFor="freelancer">&nbsp;Freelancer</label>
                                            </td>
                                            <td>
                                                <input type="radio" name="role" id="requester" value="requester" onChange={this.handle} />
                                                <label htmlFor="requester">&nbsp;Requester</label>
                                            </td>
                                        </tr>
                                    </table>
                                    {(this.state.formErrors.role.length > 0 && this.state.flag) && (<div style={errStyle}>{this.state.formErrors.role}</div>)}
                                </div>
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        Đăng kí
                                    </button>
                                </div>
                                {this.state.error && <div style={{ marginTop: 7, fontSize: 14, color: "red", textAlign: "center" }}>{this.state.error}</div>}
                                <div className="text-center p-t-12">
                                    <span className="txt1">
                                        Bạn đã có tài khoản?&nbsp;
                                    </span>
                                    <Link to="/login">
                                        <a className="txt2" href="#">
                                            Đăng nhập
                                        </a>
                                    </Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm