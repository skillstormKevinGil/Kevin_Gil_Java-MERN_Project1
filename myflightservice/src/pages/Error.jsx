import '../App.css'
import errorImg from '../images/No Image Available.webp';

export const Error = () => {
    return (
        <div className='error'  id='center'>
            <h1>The page you were looking for could not be found.</h1>
            <img className='error' src={errorImg} alt="Default Error"/>
        </div>
    );
}