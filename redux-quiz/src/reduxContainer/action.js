import { increaseScore, increaseCount, lockOn, lockOff } from "./quizConstants"

const onIncrease = () => {
    return {
        type: increaseScore
    }
}

export const countUp = () => {
    return {
        type : increaseCount
    }
}

export const onLock = () => {
    return {
        type : lockOn
    }
}

export const offLock = () => {
    return {
        type : lockOff
    }
}

export default onIncrease