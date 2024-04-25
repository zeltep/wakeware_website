import '../styles/Header.css'

function Header() {
  const asciiLogo =
    " _    _       _          _    _                \n" +
    "| |  | |     | |        | |  | |               \n" +
    "| |  | | __ _| | _____  | |  | | __ _ _ __ ___ \n" +
    "| |/\\| |/ _` | |/ / _ \\ | |/\\| |/ _` | '__/ _ \\\n" +
    "\\  /\\  / (_| |   <  __/ \\  /\\  / (_| | |  | __/\n" +
    " \\/  \\/ \\__,_|_|\\_\\___|  \\/  \\/ \\__,_|_|  \\___|";
  
  return (
    <nav className="headerNav">
      <div className="headerLogo">
        <a href="/">
          <pre>{asciiLogo}</pre>
        </a>
      </div>
      <div className="headerSearch">
        <span>Search:</span>
        <input type='text' />
      </div>
    </nav>
  )
}

export default Header
