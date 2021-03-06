import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/formsControl';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import styles from './../common/FormsControls/formControl.module.css'

const LoginForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'email'} 
                placeholder={'Email'} 
                component={Input}
                validate={[required]}
            />
        </div>
        <div>
            <Field name={'password'} placeholder={'Password'} component={Input} validate={[required]} type={'password'}/>
        </div>
        <div>
            <Field name={'rememberMe'} type={'checkbox'} component={Input}/>
            Remember me
        </div>
        { props.error && <div className={styles.formSummaryError}>
            {props.error}
        </div>}
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
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return (<div>
        <h1>
            Login
        </h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
}

const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, {
    login
})(Login)