const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}
];

const getWorthyWorkers = workersArr => {
    const WorthyWorkers = [];

    workersArr.forEach(currentWorker => {
        if (currentWorker.salary > 1000) {
            WorthyWorkers.push(currentWorker.name)
        }
    });

    return WorthyWorkers

    // for (let i = 0; i < workersArr.length; i++) {
    //     const currentworker = workersArr[i];

    //     if (currentworker.salary > 1000) {
    //     WorthyWorkers.push(currentworker.name);
    //     }
    // }
};

console.log(getWorthyWorkers(workers));
