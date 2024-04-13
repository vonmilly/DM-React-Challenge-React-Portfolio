import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'
import About from './src/pages/AboutMePage'
import Contact from './src/pages/ContactMe'
import Portfolio from './src/pages/Portfolio'
import Resume from './src/pages/Resume'
import Error from './src/pages/Error'
import Footer from './src/pages/Footer'

// Define all accessible routes as well is which component responds to which URL

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                path: '/About',
                element: <About />
            },
            {
                path: '/Contact',
                element: <Contact />
            },
            {
                path: '/Portfolio',
                element: <Portfolio />
            },
            {
                path: '/Resume',
                element: <Resume />
            },
            {
                path: '/Footer',
                element: <Footer />
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);