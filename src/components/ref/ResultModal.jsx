import { useRef,forwardRef, useImperativeHandle } from "react";

const  ResultModal = forwardRef(function ResultModal(
    {targetTime, remainingTime, onReset},
    ref
){
    const dialog  = useRef();

    const userLost = remainingTime <= 0;
    //밀리초를 초로 바꾸고 소수점 둘째 자리까지 표시
    const formattedRemainingTime  = (remainingTime/1000).toFixed(2);
    //현재 점수 계산식은 남은 시간이 적을수록 점수가 높아지는 방식
    const score = Math.round((1-remainingTime/(targetTime * 1000))*100);
    //부모 컴포넌트가 자식의 내부 DOM에 직접 접근하지 않고, open()이라는 기능만 사용할 수 있게 합
    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            }
        }
    });


    return (
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your Score : {score}</h2>}

            <p>The target time was <strong>{targetTime} seconds. </strong></p>
            <p>You stopped the timer with {' '} 
                <strong>{formattedRemainingTime} seconds left</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
});

export default ResultModal;