import React from 'react';
import Input from '../../components/Input';

const Login = () => {
    return (
        <div className='mx-2'>
            <h3 className='text-center'>Login</h3>
            <Input label='Username' id='username' />
            <Input label='Password' id='password' type='password' />
        </div>
    );
};

export default Login;