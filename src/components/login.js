import React, {useState} from 'react';
import '../assets/styles.css';

/* DATABASE IMPORT */

import DatabaseUsers from './database.json';

/* REACT ROUTER */

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

/* snackbar */
import SnackbarContent from '@material-ui/core/SnackbarContent';

export const LoginForm = () => {

    /*  */

    const history = useHistory();

    /* creamos el estado para el email y el password del form */
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    
    /* creamos una cost que recibe un e -> event en donde se va colocando el value que el usuario ponga en los inputs */
    const updateVal = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    /* creamos una const onSubmit para verificar si los datos que el usuario ingresa en los inputs son iguales a los que hay en el estado */

    const onSubmit = (e) => {
        e.preventDefault()
        const userExits = (element) => {
            if (element.email === state.email && element.password === state.password) {
                return true;
            } else {
                return false;
            }
        }    

        /* filtramos los datos que el usuario haya puesto para ver si alguno está en la database */

        const userExitsArray = DatabaseUsers.filter(userExits);

        /* realizamos la condición */

        if (userExitsArray.length > 0) {
            alert("Has ingresado con éxito, bienvenido: "+ userExitsArray[0].name + ' ' + userExitsArray[0].lastname)
        } else {
            alert("Contraseña o correo incorrectos")
        }

    }


    return (
       
        <div className="container">
            <div className="abs-center">
                <form className="form col-xs-12 col-lg-5">
                    <div className="form-group text-center p-3">
                    <label for="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={state.email}
                        onChange={updateVal}
                        placeholder="Ejemplo@kevin.com"
                        class="form-control" 
                    />
                    </div>
                    <div className="form-group text-center p-3">
                    <label for="email">Contraseña</label>
                    <input 
                        type="password" 
                        name="password"
                        value={state.password}
                        onChange={updateVal}
                        placeholder="123456789"
                        class="form-control" 
                    />
                    </div>
                    <div className="text-center col-xs-12 col-lg-6">
                        <button 
                        type="submit"
                        className="btn-login py-2 w-100"
                        onClick={onSubmit}
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
    )

}