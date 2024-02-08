import { useState } from "react";
import Header from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";

import "./styles.css";

function App() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    // Buscando Usuário
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio , login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      // Buscando repositórios
      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if(newRepos.length) {
        setRepos(newRepos)
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} alt="GitHub Logo" className="background" />
        <div className="info">
          <div>
            <input
              name="usuario"
              defaultValue={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="@username"
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>

    {currentUser?.name ? ( <>
      <div className="perfil">
      <img
        src={currentUser.avatar_url}
        alt="GitHub Profile Pic"
        className="profile"
      />
      <div>
        <h3>{currentUser.name}</h3>
        <span>@{currentUser.login}</span>
        <p>D{currentUser.bio}</p>
      </div>
    </div>
    <hr />
    </>
    ) : null}
    {repos?.length ? (
    <div>
      <h4>Repositórios</h4>
      {repos.map(repo => (
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            <ItemList title={repo.name} description={repo.description} />
          </a>
      ))}
    </div>
    ) : null}
        </div>
      </div>
    </div>
)}

export default App;
