import Dock from '../Components/ReactBits/Dock';
import { Home, Briefcase, ScrollText, CalendarDays } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  let navigate = useNavigate();

  const items = [
    { icon: <Home size={22}  className='text-white' />, label: 'Home', onClick: () => navigate('/') },
    { icon: <ScrollText size={22}  className='text-white' />, label: 'My Story', onClick: () => navigate('/about') },
    { icon: <Briefcase size={22}  className='text-white' />, label: 'Projects', onClick: () => navigate('/projects') },
    { icon: <CalendarDays size={22}  className='text-white' />, label: 'Book a Call', onClick: () => navigate('/') },
  ];

  return (
    <div className='w-full fixed bottom-0 left-0 z-100 bg-gradient-to-b from-black/0 to-black' > 
      <Dock 
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
    )
  };

export default Navbar;
