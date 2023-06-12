import React from 'react';
import useAuth from '../../hooks/useAuth';
import useRole from '../../hooks/useRole';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../components/Loading/Loading';

const InstructorRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [role, isLoading] = useRole();
    if(loading || isLoading) {
        return <Loading></Loading>
    }
    else if (user && role === 'instructor'){
        return children;
    }
    else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Unauthorized Access',
            showConfirmButton: false,
            timer: 1500
          })
         return <Navigate to="/" replace></Navigate>;
    }
};

export default InstructorRoute;