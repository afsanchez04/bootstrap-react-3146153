import "./App.css";
import { NavBar } from "./components/NavBar";
import { ExtensionCard } from "./components/ExtensionCard";
import { LoginForm } from "./components/LoginForm";
import { ProductCard } from "./components/ProductCard";

export const App = () => {
  return (
    <>
      <NavBar />
      <div className="containerCards">
        <ExtensionCard
          cardTitle="Google Translate"
          cardImage="🤢"
          cardDescription="Aplicación para traducir páginas"
        />
        <ExtensionCard
          cardTitle="Spotify"
          cardImage="🚀"
          cardDescription=""
        />
        <ExtensionCard
          cardTitle="Samsung"
          cardImage=""
          cardDescription=""
        />
        <ExtensionCard
          cardTitle=""
          cardImage=""
          cardDescription=""
        />
        <ExtensionCard
          cardTitle=""
          cardImage=""
          cardDescription=""
        />
        <ExtensionCard
          cardTitle=""
          cardImage=""
          cardDescription=""
        />
        <ExtensionCard
          cardTitle=""
          cardImage=""
          cardDescription=""
        />
        <ExtensionCard
          cardTitle=""
          cardImage=""
          cardDescription=""
        />
        <ExtensionCard
          cardTitle=""
          cardImage=""
          cardDescription=""
        />




      </div>
      <h1>React + Bootstrap</h1>
      <LoginForm />

      <ProductCard/>
    </>
  );
};
