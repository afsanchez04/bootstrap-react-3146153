//Vamos  a importar los estilos y el componente IfoCard
import { InfoCard } from "./components/InfoCard"
import { UserCard } from "./components/UserCard"
import "./App.css"

export function App () {
  return (
    <div>
      <h1>App</h1>
      <InfoCard /> 
      <UserCard 
        image="https://rickandmortyapi.com/api/character/avatar/124.jpeg" 
        userName="Father Bob"
      />
      <UserCard 
        image="https://rickandmortyapi.com/api/character/avatar/311.jpeg" 
        userName="Shimshamian"
      />
      <UserCard 
        image="https://rickandmortyapi.com/api/character/avatar/571.jpeg" 
        userName="Slippy"
      />
    </div>
  )
}