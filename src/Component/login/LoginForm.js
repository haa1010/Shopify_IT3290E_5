import React, { Component } from 'react'
import "./LoginForm.css"

import Cookies from 'universal-cookie';
const cookies = new Cookies();

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: null,
            password: null,
            
            formErrors: {
                username: "",
                password: "",
              
            },
            error: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handle = this.handle.bind(this)
    }

    handleSubmit = async e => {
        e.preventDefault()
        console.log(this.state.username);
        console.log(this.state.password);
       
       if(this.state.username==='admin'&&this.state.password==='admin') {
           
      cookies.set('login', true, { path: '/', expires: 0 });
        
        window.location.href = '/dashboard'; 
    }
            else {
                this.setState({ error: "username hoặc mật khẩu không chính xác" })
            }
}

    

    handle = e => {
        let { name, value } = e.target
        let formErrors = this.state.formErrors
        switch (name) {
            case "username":
                formErrors.username = (value.length === 0) ? "nhập username" : (value!=='admin'?"Sai admin user":'')
               
                break
            case "password":
                formErrors.password = (value.length > 0) ? "" : "Bạn chưa nhập mật khẩu";
              
                break;
            
            default: 
                return;
        }
        this.setState({
            formErrors,
            [name]: value
        })
    }

    render() {
        const errStyle = { marginBottom: 7, fontSize: 14, color: "red", textAlign: "center" }
        return (
            <div className="justify-content-center">
            <div className="LoginForm">
                <div className="limiter">
                    <div className="  justify-content-center d-flex align-items-center ">
                        <div className="wrap-login100 align-self-center" style={{marginTop:'17%',width:'20vw'}}>
                            <div className="login100-pic js-tilt">
                               
                            </div>

                            <form className="login100-form validate-form " onSubmit={this.handleSubmit} autoComplete="off">
                                <h2 className="login100-form-title  pb-5" style={{color:'black',fontSize:'45px', fontWeight:'300'}}>
                                    Đăng nhập
                                </h2>

                                <div className="wrap-input100 validate-input "  >
                                    <input
                                        className={(this.state.formErrors.username.length > 0 ) ? "input100 err" : "input100"}
                                        type="text"
                                        name="username"
                                        placeholder="Email"
                                        onChange={this.handle} style={{height:'40px',marginBottom:'15px',width:'100%',fontSize:'25px'}}/>
                                    <span className="focus-input100"></span>
                                  
                                </div>
                                {this.state.formErrors.username.length > 0  && (<div style={errStyle}>{this.state.formErrors.username}</div>)}
                                <div className="wrap-input100 validate-input">
                                    <input
                                        className={(this.state.formErrors.password.length > 0) ? "input100 err" : "input100"}
                                        type="password"
                                        name="password"
                                        placeholder="Mật khẩu"
                                        onChange={this.handle}   style={{height:'40px',fontSize:'25px',marginBottom:'15px'}}/>
                                    <span className="focus-input100"></span>
                                    
                                </div>
                                {(this.state.formErrors.password.length > 0 ) && (<div style={errStyle}>{this.state.formErrors.password}</div>)}
                                
                         
                                <div className="container-login100-form-btn float-center d-flex justify-content-center align-item-center" >
                                    <button className="btn  btn-warning btn-outline-dark  "  type='submit'  onClick={this.handleSubmit}style={{fontSize:'25px'}}>
                                        Đăng nhập
                                    </button>
                                </div>
                                {this.state.error && <div style={{ marginTop: 7, fontSize: 14, color: "red", textAlign: "center" }}>Username hoặc mật khẩu không đúng</div>}

                             

                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default LoginForm