export function Navbar() {
  return (
    <div className="Inicial">
      <div>
        <img
          className="Logo"
          src="https://static.wikia.nocookie.net/animeverso/images/5/56/Blue_Lock_Logo_2.png/revision/latest/scale-to-width-down/500?cb=20241025123653&path-prefix=pt-br"
          alt="Blue Lock"
        />
      </div>

      <div className="FDP">
        <div className="FDP">
          <a className="A" href="#projeto">
            Projeto
          </a>

          <a className="A" href="#jogadores">
            Jogadores
          </a>

          <a className="A" href="#newgens">
            New Gens
          </a>

          <a className="A" href="#monte-seu-time">
            Monte seu time
          </a>

          <a className="A btn-nav" href="#diamantes">
            Diamantes Brutos
          </a>
        </div>
      </div>
    </div>
  );
}
