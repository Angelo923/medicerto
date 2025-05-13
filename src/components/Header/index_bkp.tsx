import {FaUserDoctor} from "react-icons/fa6";
import { ModeToggle } from '@/components/Themes/mode-toggle.tsx';

const Header = () => {
    return (
      <header className="flex justify-between bg-primary text-white p-4 shadow z-10 items-center">
        <h1>Medicerto <FaUserDoctor /></h1>
        <div><ModeToggle /></div>
      </header>
    );
};

export default Header;