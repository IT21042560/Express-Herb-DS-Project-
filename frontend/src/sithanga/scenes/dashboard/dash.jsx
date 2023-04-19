import React from 'react'
import Header from './header'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isLoggedIn } from '../../actions/authActions';

const Dash = () => {

    const dispatch = useDispatch();
    const authenticated = useSelector(state => state.auth.authenticated);
    useEffect(() => {
		if (!authenticated) {
			dispatch(isLoggedIn());
		}
	}, []);
    return (

        <>
            <Header />


        </>
    )
}

export default Dash