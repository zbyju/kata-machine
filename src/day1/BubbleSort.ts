export default function bubble_sort(arr: number[]): void {
    for (let i = arr.length - 1; i > 1; --i) {
        for (let j = 0; j < i; ++j) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
