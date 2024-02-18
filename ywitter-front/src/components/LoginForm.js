import * as React from 'react';
import classNames from 'classnames';

export default class LoginForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          active: "login",
          firstName: "",
          lastName: "",
          login: "",
          password: "",
          onLogin: props.onLogin,
          onRegister: props.onRegister
        };
    }
    
    onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value})
    }

    onSubmitLogin = (e) => {
        this.state.onLogin(e, this.state.login, this.state.password);
    };

    onSubmitRegister = (e) => {
        this.state.onRegister (
            e,
            this.state.firstName,
            this.state.lastName,
            this.state.login,
            this.state.password
        );
    };

    render() {
        return (
            <div className='row justify-content-center'>
                <div className='col-4'>
                    <ul className='nav nav-pills nav-justified mb-3' id='ex1' role='tablist'>
                    <li className='nav-item' role='presentation'>
                    <button className={classNames('nav-link', { 'active': this.state.active === 'login' ? 'active' : ''})}
                         id='tab-login'>Login</button>
                    </li>
                    <li className='nav-item' role='presentation'>
                    <button className={classNames('nav-link', { 'active': this.state.active === 'register' ? 'active' : ''})}
                         id='tab-register'>Register</button>
                    </li>
                    </ul>

                    <div className='tab-content'>
                        <div className={classNames('tab-pane', 'fade', { 'active': this.state.active === 'register' ? 'show active' : ''})}>
                            <form>
                                <div className='form-outline mb-4'>
                                    <input type='login' id='loginName' name='login' className='form-control'/>
                                    <label className='form-label' htmlFor='loginName'>Username</label>
                                </div>
                                <div className='form-outline mb-4'>
                                    <input type='password' id='loginPassword' name='password' className='form-control'/>
                                    <label className='form-label' htmlFor='loginPassword'>Password</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}