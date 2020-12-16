import React from 'react';
import { useUserInfo } from '../../store/user';

const UserPage = () => {
    
    // OJO esto solo para yo mismo, borrar de inmediato ya que la información del usuario
    // se debe obtener por peticiones http
    const { first_name } = useUserInfo();

    return (
        <div>
            <h1>{first_name}</h1>
        </div>
    );
}
 
export default UserPage;