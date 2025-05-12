
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Profession } from '@/types';

interface ProfessionCardProps {
  profession: Profession;
}

const ProfessionCard: React.FC<ProfessionCardProps> = ({ profession }) => {
  const { id, title, icon, description, color } = profession;

  return (
    <Link 
      to={`/profession/${id}`} 
      className="card-hover block rounded-xl border bg-white p-6 shadow-sm animate-fade"
    >
      <div className="flex items-start gap-4">
        <div 
          className="flex h-12 w-12 items-center justify-center rounded-md"
          style={{ backgroundColor: color }}
        >
          <Icon name={icon} className="h-6 w-6 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>
        
        <Icon 
          name="ChevronRight" 
          className="mt-1 h-5 w-5 text-gray-400" 
        />
      </div>
      
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-gray-500">
          {profession.terms.length} терминов
        </span>
        <span 
          className="font-medium"
          style={{ color }}
        >
          Изучить →
        </span>
      </div>
    </Link>
  );
};

export default ProfessionCard;
