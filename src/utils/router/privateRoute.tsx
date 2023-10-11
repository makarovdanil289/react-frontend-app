import {Navigate, Outlet} from 'react-router-dom';

const privateRoute = () => {
    const auth = true
    return (
        auth ? <Outlet /> : <Navigate to='login' />
    );
};

export default privateRoute;