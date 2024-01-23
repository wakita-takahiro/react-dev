// import logo from './logo.svg';
import './App.scss';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Notfound } from "./routes/Notfound";
import { Footer } from "./routes/Footer";
import { Posts } from "./routes/Posts";
import { Post } from "./routes/Post";
import { PostIndex } from "./routes/PostIndex";

function App () {
  return (
    <div className="App">
      <h1>
        react-router-V6
      </h1>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/posts" element={ <Posts /> }>
          <Route index element={<PostIndex />} />
          <Route path=":postId" element={ <Post /> } />
        </Route>
        <Route path="*" element={ <Notfound /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
