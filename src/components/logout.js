import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {logout, selectUser} from '../features/userSlice';

const Logout = () => {
	const user = useSelector(selectUser);
	const dispatch =useDispatch();
	const handleLogout = (e) => {
		e.preventDefault();
		
		dispatch(logout());

	}
	return(
		<div>
			<form action="" style={{color: "red"}}>
				<h2>Welcome To Our Page!!!
					<hr/>
					fucking jobs shit shit shit {user.name}</h2>
				<button  style={{backgroundColor: "yellow"}} onClick={(e) => handleLogout(e)}>Logout</button>
			</form>
		</div>
	)
} 
export default Logout;