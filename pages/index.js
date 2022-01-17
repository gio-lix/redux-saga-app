import Layout from "../components/Layout";
import {login, logout} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {loginReducer} from "../redux/reducers/loginReducer";




export default function Home() {
    const data = useSelector(data => data.loginReducer)
    console.log('front data ->>>>->>>->>>->>->', data)
    const dispatch = useDispatch()
    const handleLoginClick = () => {
            dispatch(login({username: 'mollie', password: 'mollie123' }))
    }
    const handleLogoutClick = () => {
            dispatch(logout())
    }

    return (
        <Layout>
            <div className='my-10 flex flex-col space-y-5'>
                <button onClick={handleLoginClick} className='w-36 hover:bg-green-800 h-10 bg-green-500 text-white font-semibold'>Login</button>
                <button onClick={handleLogoutClick} className='w-36 hover:bg-green-800 h-10 bg-green-500 text-white font-semibold'>Logout</button>
            </div>
        </Layout>
    )
}


