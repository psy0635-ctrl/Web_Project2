
import { useState } from "react";

// 현재 인원수를 0명 이상, 최대 정원 이하로 유지하는 사용자 정의 훅
function useCounter(initialValue = 0, maxValue = Infinity) {
    const [count, setCount] = useState(() =>
        Math.min(Math.max(initialValue, 0), maxValue)
    );

    const increaseCount = () => {
        setCount((previous) => Math.min(previous + 1, maxValue));
    };

    const decreaseCount = () => {
        setCount((previous) => Math.max(previous - 1, 0));
    };

    return [count, increaseCount, decreaseCount];
}

export default useCounter;
