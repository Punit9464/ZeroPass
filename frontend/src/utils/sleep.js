function sleep(time) {
    return new Promise((rej, res) => {
        setTimeout(() => {
            res();
        }, time);
    });
}

export default sleep;