import Player from './Player.jsx';
import TimerChallenge from './TimerChallenge.jsx';
import './index.css';
function RefApp() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="EASY" targetTime={1} />
        <TimerChallenge title="NOT EASY" targetTime={5} />
        <TimerChallenge title="GETTING TOUCH" targetTime={10} />
        <TimerChallenge title="PROS ONLY" targetTime={15} />

      </div>
    </>
  );
}

export default RefApp;
