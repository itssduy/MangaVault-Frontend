import HomePage from './components/pages/homePage.jsx'
import ErrorPage from './components/pages/errorPage.jsx'

const routes = [
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage /> 
    }
]


export default routes;