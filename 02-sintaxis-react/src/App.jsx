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

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <ProductCard/> 
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
            <ProductCard/> 
          </div>
          <div className="col-12 col-md-12 col-lg-4 mt-4 mt-lg-0">
            <ProductCard/> 
          </div>
        </div>
      </div>
    </>
  );
};
