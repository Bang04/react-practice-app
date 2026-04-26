import ResultModal from "./ResultModal";
import { useEffect, useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();


  //const [timerStarted, setTimerStarted] = useState(false);
  //const [timerExpried, setTimerExpried] = useState(false);

  const [timeRemaining , setTimeRemaining] = useState(targetTime*1000); //남은 시간을 밀리초 단위로 저장
  const timerIsActive = timeRemaining >0 && timeRemaining < targetTime * 1000;//타이머가 시작되었고 아직 끝나지 않은 상태인지 판단


  //timeRemaining이 바뀔 때마다 실행됩니다.
  //남은 시간이 0 이하가 되면 타이머를 멈추고 모달을 오픈
  useEffect(() => {
    if(timeRemaining <= 0){
    clearInterval(timer.current);
    dialog.current.open();
  }

  },[timeRemaining]);

  //10ms마다 남은 시간을 줄임
  function handleStart() {
    timer.current = setInterval(() => {
     setTimeRemaining((prev) => prev-10);
    }, 10);
  }

  //모달이 닫혔을 때 게임을 처음 상태로 되돌립니다. 좋습니다.
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }
  function handleStop() {
    clearInterval(timer.current);
    dialog.current?.open();
  }


  return (
    <>
      <ResultModal 
        ref= {dialog} 
        targetTime={targetTime} 
        remainingTime= {timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start' } Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
         {timerIsActive ? 'Time is running .... ' : 'Timer inactive'}</p>
      </section>
    </>
  );
}
