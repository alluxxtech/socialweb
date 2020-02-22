import React from 'react';
import { reduxForm, Field, clearFields } from 'redux-form';

const LoginForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'login'} placeholder={'Login'} component={'input'}/>
        </div>
        <div>
            <Field name={'password'} placeholder={'Password'} component={'input'}/>
        </div>
        <div>
            <Field name={'rememberMe'} type={'checkbox'} component={'input'}/>
            Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
)

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm) 

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (<div>
        <h1>
            Login
        </h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
}

export default Login;