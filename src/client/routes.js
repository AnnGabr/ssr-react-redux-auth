import HomePage from './pages/Home';
import UsersListPage from './pages/UsersList';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import AdminsList from './pages/AdminsList';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...AdminsList,
                path: '/admins'
            },
            {
                ...UsersListPage,
                path: '/users'
            },
            {
                ...NotFoundPage
            }
        ]
    }
];