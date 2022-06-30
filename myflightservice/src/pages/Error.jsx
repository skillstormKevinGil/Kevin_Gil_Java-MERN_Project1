import '../App.css'
import errorImg from '../No Image Available.webp';

export const Error = () => {
    return (
        <div className='center'>
            <h1>The page you were looking for could not be found.</h1>
            <img src={errorImg} alt="Default Error" height={200}/>
        </div>
    );
}