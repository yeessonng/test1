let isStudying = false;
let isBreaking = false;
let startTime = 0;
let breakTime = 0;

// 공부 시작
export const startStudy = async () => {
    if (!isStudying) {
        startTime = Date.now();
        isStudying = true;
        isBreaking = false;
    }
    return true;
}

// 공부 중지
export const stopStudy = async () => {
    if (isStudying && !isBreaking) {
        const currentTime = Date.now();
        const studyTime = currentTime - startTime;
        isStudying = false;
        isBreaking = true;
        return studyTime;
    }
    return false;
}

// 쉬는 시간 시작
export const startBreak = async () => {
    if (!isBreaking) {
        startTime = Date.now();
        isStudying = false;
        isBreaking = true;
    }
    return true;
}

// 쉬는 시간 중지
export const stopBreak = async () => {
    if (isBreaking && !isStudying) {
        const currentTime = Date.now();
        const breakDuration = currentTime - startTime;
        breakTime += breakDuration;
        isStudying = false;
        isBreaking = false;
        return breakTime;
    }
    return false;
}
