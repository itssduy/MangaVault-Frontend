import Home from './components/pages/home.jsx'
import Error from './components/pages/error.jsx'
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
                path: '/manga',
            }
        ]
    }
]


export default routes;