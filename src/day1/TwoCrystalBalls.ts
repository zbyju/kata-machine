// Breaks [false, false, false, ..., false, true, true, true, ..., true]
export default function two_crystal_balls(breaks: boolean[]): number {
    const jmp = Math.floor(Math.sqrt(breaks.length));
    let i = jmp;
    while (i < breaks.length && breaks[i] === false) {
        i += jmp;
    }

    for (let j = i - jmp; j <= i; ++j) {
        if (breaks[j] === true) return j;
    }

    return -1;
}
