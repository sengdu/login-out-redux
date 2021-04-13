import React from 'react';
import Login from './components/login';
import Logout from './components/logout';
import {useSelector} from 'react-redux';
import {selectUser } from './features/userSlice';

const App = () => {
	const user = useSelector(selectUser);

	return <div> {user ? <Logout/> : <Login/>}	</div>
	
}

export default App;