import React from 'react';
import useAuth from '../../hooks/useAuth';
import useRole from '../../hooks/useRole';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const InstructorRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [role, isLoading] = useRole();
    if(loading || isLoading) {
        // TODO: add loading
        return <progress className="progress w-56"></progress>
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