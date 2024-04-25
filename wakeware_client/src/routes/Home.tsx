import '../styles/Home.css'
import Explorer from '../components/Explorer'
import Footer from '../components/Footer';

function Home() {
  const asciiLogo =
    " _    _       _          _    _                \n" +
    "| |  | |     | |        | |  | |               \n" +
    "| |  | | __ _| | _____  | |  | | __ _ _ __ ___ \n" +
    "| |/\\| |/ _` | |/ / _ \\ | |/\\| |/ _` | '__/ _ \\\n" +
    "\\  /\\  / (_| |   <  __/ \\  /\\  / (_| | |  | __/\n" +
    " \\/  \\/ \\__,_|_|\\_\\___|  \\/  \\/ \\__,_|_|  \\___|";

  return (
    <div className="homeView">
      <div>
        <h1>
          <pre>{asciiLogo}</pre>
        </h1>
        <p className="introMessage">
          Welcome! WakeWare is a student-built initiative dedicated to helping students and faculty to collaborate on software projects.
        </p>
        <div className="searchBar">
          <span>Search:</span>
          <input type='text' />
        </div>
        <Explorer />
        <Footer />
      </div>
    </div>
  )
}

export default Home
