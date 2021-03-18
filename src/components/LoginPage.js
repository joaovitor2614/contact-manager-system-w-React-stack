import React from 'react'
import { startLogin, startLoginGit } from '../actions/auth'
import { useDispatch } from 'react-redux'


const LoginPage = () => {
    const dispatch = useDispatch();
    const handleGoogle = () => {
        dispatch(startLogin())
    }
    const handleGit = () => {
        dispatch(startLoginGit())
    }
    return (
        <div className='box-container'>
            <div className='box-container__content'>
                <div className='box-container__title-box'>
                    <h1 className='box-container__title'>Login com</h1>
                </div>
                <div className='box-container__btn-group'>
                    <button className='button button--google button--brand' onClick={handleGoogle}>
                        Google</button>
                    <button className='button button--git button--brand' onClick={handleGit}>
                        Github</button>
                </div>

            </div>

        </div>
    )
}


export default LoginPage