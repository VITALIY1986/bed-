/**
 * External dependencies
 */
 import { useState } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
 
 /**
  * Internal dependencies
  */
 import Field from '../login-function/field';
 import { useAuth } from '../login-function/hooks';
 
 export const LoginForm = () => {
     const [ username, setUsername ] = useState( '' );
     const [ password, setPassword ] = useState( '' );
     const { login, error, status } = useAuth();
 
     const onLogin = ( e ) => {
         e.preventDefault();
         login( username, password );
     };
 
     return (
         <form onSubmit={ onLogin } className="login-form" autoComplete="on">
             { error && (
                 <div className="error-notice">
                     <FontAwesomeIcon
                         icon={ faSkullCrossbones }
                         aria-hidden={ true }
                     />
                     <p>{ error }</p>
                 </div>
             ) }
             <Field
                 label="Username or Email Address"
                 value={ username }
                 autoComplete="username"
                 onChange={ ( value ) => setUsername( value ) }
                 disabled={ status === 'resolving' }
              
             />
             <Field
                 label="Password"
                 type="password"
                 autoComplete="current-password"
                 value={ password }
                 onChange={ ( value ) => setPassword( value ) }
                 disabled={ status === 'resolving' }
             />
             <p>
                 <button
                     className="button button--inline button--large"
                     onClick={ onLogin }
                     disabled={ status === 'resolving' }
                 >
                     Sign in
                 </button>
             </p>
         </form>
     );
 };
 
 export default LoginForm;