import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { Link, Navigate } from 'react-router-dom';

function ProfileLayOut() {
    
    const { login } = useSelector(store => store.auth);
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT'
        })
    }
    if (!login) {
        return <Navigate to = '/authen/login'/>
    }
    return (
        <div>
            <ul>
                <li>
                    <Link to = '' >My Profile</Link>
                </li>
                <li>
                    <Link to = 'order' >Order</Link>
                </li>

                <li>
                    <Link to = 'payment' >Pay Ment</Link>
                </li>
                <li>
                    <Link to = 'address' >Address</Link>
                </li>
              
            </ul>
            ProfileLayOut 
            <button onClick={handleLogout}>Logout</button>
            <Outlet />
        </div>
    );
}

export default ProfileLayOut;