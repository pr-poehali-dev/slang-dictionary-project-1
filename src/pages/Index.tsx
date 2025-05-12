
import React from 'react';
import Header from '@/components/Header';
import ProfessionCard from '@/components/ProfessionCard';
import { professions } from '@/data/professions';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Словарь профессионального 
            <span className="text-primary"> сленга</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Узнайте, что означают специфические термины в разных профессиях
          </p>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Icon name="BookOpen" className="h-4 w-4 text-primary" />
              </div>
              <span>6 профессий</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10">
                <Icon name="FileText" className="h-4 w-4 text-secondary" />
              </div>
              <span>30+ терминов</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                <Icon name="RefreshCw" className="h-4 w-4 text-green-500" />
              </div>
              <span>Регулярные обновления</span>
            </div>
          </div>
        </section>
        
        <section className="mt-12 mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-gray-900">
            Выберите профессию
          </h2>
          
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {professions.map((profession) => (
              <ProfessionCard 
                key={profession.id} 
                profession={profession} 
              />
            ))}
          </div>
        </section>
      </main>
      
      <footer className="mt-16 border-t bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2025 СленгМастер — словарь профессионального сленга
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
