// /frontend/src/routes.js

// Import các trang (Pages)
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// (Tùy chọn) Import layout khác nếu có
// import AdminLayout from './components/Layout/AdminLayout';

const publicRoutes = [
    { path: '/', component: HomePage }, // Sẽ tự động dùng DefaultLayout
    { path: '/register', component: RegisterPage }, // Sẽ tự động dùng DefaultLayout

    // Trang Login không cần Header/Footer, nên layout: null
    { path: '/login', component: LoginPage, layout: null }, 
];

export { publicRoutes };