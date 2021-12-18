import { Outlet } from 'react-router-dom';
import Footer from '../../components/kk/Footer';
import Navbar from '../../components/kk/Navbar';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
);

export default MinimalLayout;
