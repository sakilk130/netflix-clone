import { useState, useContext, createContext } from "react";
import { Button, Close, Container, Inner, Overlay } from "./styles/player";
import ReactDOM from "react-dom";
interface IPlayerContext {
  showPlayer: boolean;
  setShowPlayer: (value: any) => void;
}

const PlayerContext = createContext<IPlayerContext>({
  showPlayer: false,
  setShowPlayer: () => {},
});

const Player = ({ children, ...restProps }: any) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
};

Player.Video = function PlayerVideo({ src, ...restProps }: any) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }: any) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return (
    <Button onClick={() => setShowPlayer(!showPlayer)} {...restProps}>
      {showPlayer ? "Close" : "Play"}
    </Button>
  );
};

export default Player;
