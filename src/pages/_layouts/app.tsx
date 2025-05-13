import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const AppLayout = () => {
  return (
    <div className="grid min-h-screen grid-cols-[minmax(200px,250px)_1fr] grid-rows-[auto_1fr_auto] transition-all">
      <Header />
      <Sidebar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};

export default AppLayout;