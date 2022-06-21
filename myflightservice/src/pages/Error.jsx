import { Center } from '../components/StylePractice';
import errorImg from '../No Image Available.webp';

export const Error = () => {
    return (
        <Center>
            <h1>The page you were looking for could not be found.</h1>
            <div><img src={errorImg} alt="Default Error Image" height={200}/></div>
        </Center>
    );
}