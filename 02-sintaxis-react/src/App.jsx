import { InfoCard } from "./components/InfoCard";
import { UserCard } from "./Components/UserCard";
import { BtsCard } from "./Components/BtsCard";
import "./App.css"


export function App(){
  return(
    <div>
      <h1>App</h1>
      <InfoCard/>
      <UserCard
      image="https://rickandmortyapi.com/api/character/avatar/473.jpeg" 
      userName={"Morty"} />
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/20.jpeg" 
      userName={"Johnson"} />
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/810.jpeg"
       userName={"Stan Lee Rick"} />
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/653.jpeg" 
      userName={"Survivor"} />

      <BtsCard
      cantante={"J-hope"}
      imagen= "https://i.postimg.cc/ydYPqny0/Jung-Hoseok.jpg"
      parrafo={"Bailarín Principal, Rapero y Vocalista Ocasional"}
      />
      <BtsCard
      cantante={"Jimin"}
      imagen= "https://i.postimg.cc/PJdNVFbw/jimin.webp"
      parrafo={"Compositor, coreógrafo, cantante y bailarín "}
      />
      <BtsCard
      cantante={"V"}
      imagen= "https://i.postimg.cc/QNWrvqYL/v.webp"
      parrafo={"Cantante, compositor, bailarín, actor y modelo "}
      />
      <BtsCard
      cantante={"Rm"}
      imagen= "https://i.postimg.cc/Wzs6m8hk/rm.jpg"
      parrafo={"Rapero, compositor, productor y cantante "}
      />
      <BtsCard
      cantante={"Suga"}
      imagen= "https://i.postimg.cc/jd5ysLN0/suga.jpg"
      parrafo={"Rapero, cantante, letrista, compositor, productor y bailarín "}
      />
      <BtsCard
      cantante={"Jin"}
      imagen= "https://i.postimg.cc/X7mB4x4Q/jin.jpg"
      parrafo={"Cantante, compositor y bailarín "}
      />
      <BtsCard
      cantante={"Jungkook"}
      imagen= "https://i.postimg.cc/PrpN3ZYz/Jungkook.jpg"
      parrafo={"Cantante y bailarín "}
      />

    </div>
  )
}