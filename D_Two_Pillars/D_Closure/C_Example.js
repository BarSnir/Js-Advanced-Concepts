const makeNuclarBomb = () => {
    let timeWithOutDestruction = 0;
    const passTime = () => timeWithOutDestruction++;
    totalPeacTime = () => timeWithOutDestruction;
    const launch = () => {
        return '💣';
    }
    setInterval(passTime, 200);
    return {
        launch: launch,
        totalPeacTime: totalPeacTime
    }
}

const ohhNo = makeNuclarBomb();
console.log(ohhNo.totalPeacTime());
setTimeout(() => {
    console.log(ohhNo.totalPeacTime());
}, 1000);
setTimeout(() => {
    console.log(ohhNo.totalPeacTime());
}, 2000);
setTimeout(() => {
    console.log(ohhNo.totalPeacTime());
}, 3000);
setTimeout(() => {
    console.log(ohhNo.launch());
}, 4000);
