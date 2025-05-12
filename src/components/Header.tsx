
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header: React.FC = () => {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white">
            <Icon name="BookOpen" className="h-5 w-5" />
          </div>
          <span className="text-xl font-rubik font-semibold text-gray-900">СленгМастер</span>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-gray-700 hover:text-primary">Главная</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary">О проекте</Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center rounded-full p-2 text-gray-700 hover:bg-gray-100">
            <Icon name="Search" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
