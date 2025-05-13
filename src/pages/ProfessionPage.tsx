import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import TermCard from "@/components/TermCard";
import { professions } from "@/data/professions";
import Icon from "@/components/ui/icon";
import { Navigate } from "react-router-dom";

const ProfessionPage = () => {
  const { id } = useParams<{ id: string }>();
  const profession = professions.find((p) => p.id === id);

  if (!profession) {
    return <Navigate to="/404" />;
  }

  // Функция для закрытия вкладки
  const closeTab = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-muted">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary"
          >
            <Icon name="ArrowLeft" className="h-4 w-4" />
            <span>Вернуться к списку профессий</span>
          </Link>

          {/* Кнопка для закрытия вкладки */}
          <button
            onClick={closeTab}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary"
          >
            <Icon name="X" className="h-4 w-4" />
            <span>Закрыть</span>
          </button>
        </div>

        <section className="mx-auto max-w-4xl">
          <div className="flex items-center gap-4">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-lg"
              style={{ backgroundColor: profession.color }}
            >
              <Icon name={profession.icon} className="h-7 w-7 text-white" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {profession.title}
              </h1>
              <p className="mt-1 text-gray-600">{profession.description}</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Термины и определения ({profession.terms.length})
            </h2>

            <div className="mt-4 grid gap-6">
              {profession.terms.map((term) => (
                <TermCard key={term.id} term={term} color={profession.color} />
              ))}
            </div>
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

export default ProfessionPage;
