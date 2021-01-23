import React from 'react';
import { useUserInfo } from '../../store/user';

const UserPage = () => {
    
    // OJO esto solo para yo mismo, borrar de inmediato ya que la información del usuario
    // se debe obtener por peticiones http ya que de esa manera es dinamico
    // en resumen, todo este código esta de prueba solamente xD
    const { first_name } = useUserInfo();

    return (
        <div>
            <h1>{first_name}</h1>
        </div>
    );
}
 
export default UserPage;