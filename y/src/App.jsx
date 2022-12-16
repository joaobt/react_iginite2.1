import { Header } from './components/Header';
import { Post } from './Post';
import './global.css';


export function App() {

  return (
    <div>
      <Header />
      <Post
        author='João B.Paula'
        content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt at natus, dolor atque neque, deleniti inventore sapiente, cum adipisci ut quibusdam ipsam totam suscipit iste veniam explicabo nisi officiis delectus!'
      />
      <Post
        author='Duda de Paula'
        content='é uma menina muito levada'
        
      />
      
    </div>
  )
}






