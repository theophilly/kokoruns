import { Outlet } from 'react-router-dom';
import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
);

export default MinimalLayout;
