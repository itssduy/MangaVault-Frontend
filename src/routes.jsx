import Home from './components/pages/home.jsx'
import Error from './components/pages/error.jsx'
import Login from './components/pages/login.jsx'
import Signup from './components/pages/signup.jsx';

import App from './App.jsx';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/manga',
            }
        ]
    }
]


export default routes;