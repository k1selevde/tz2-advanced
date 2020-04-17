import React from 'react'
import {testEmail, testPassword} from "../helpers/validateInputs";
import Alert from "./Alert";
import {hideAlert} from "../redux/actions/sessionActions";

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }


    changeHandler = e => {
        const fieldName = e.target.name
        const fieldValue = e.target.value

        this.setState(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
    }

    submitHandler = e => {

        const {email, password} = this.state

        e.preventDefault()
        this.props.logIn({
            email,
            password
        })

        console.log('email: ', email, 'password: ', password)

            this.setState(prev => ({
                    ...prev,
                    password: ''
                })
            )
    }

    validate = (email, password) => {
        return testEmail(email) && testPassword(password)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.error != null)
        {
            setTimeout(() => this.props.hideAlert(),1500)
        }
    }

    render() {
        const {email, password} = this.state
        return (

            <div className="container">
                <h3>Войдите на сервис</h3>
                {this.props.error && <Alert/>}
                <form onSubmit={this.submitHandler}>
                    <input
                        placeholder="Введите почту"
                        type="text"
                        name="email"
                        onChange={this.changeHandler}
                        value={email}
                        autoFocus
                    />
                    <input
                        placeholder="Введите пароль"
                        type="text"
                        name="password"
                        onChange={this.changeHandler}
                        value={password}

                    />
                    <button
                        className="mui-btn  mui-btn--primary"
                        type="submit"
                        disabled={!this.validate(email, password)}
                    >
                        ВОЙТИ
                    </button>
                </form>
            </div>
        )


    }
}

export default Login
