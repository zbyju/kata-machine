export default function bs_list(haystack: number[], needle: number): boolean {
    return bs(haystack, 0, haystack.length - 1, needle);
}

function bs(array: number[], lo: number, hi: number, val: number): boolean {
    if (lo > hi) return false;
    const mid = Math.floor((hi - lo) / 2) + lo;
    if (array[mid] === val) return true;
    if (array[mid] < val) return bs(array, mid + 1, hi, val);
    return bs(array, lo, mid - 1, val);
}
