import binary_fn from "@code/BinarySearchList";

function testAll(array: number[]) {
    array.forEach((x) => expect(binary_fn(array, x)).toEqual(true));
}

test("binary search array - odd length", function () {
    const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    testAll(foo);
    expect(binary_fn(foo, 1336)).toEqual(false);
    expect(binary_fn(foo, 69421)).toEqual(false);
    expect(binary_fn(foo, 0)).toEqual(false);
});

test("binary search array - even length", function () {
    const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420, 6942069];
    testAll(foo);
    expect(binary_fn(foo, 1336)).toEqual(false);
    expect(binary_fn(foo, 69421)).toEqual(false);
    expect(binary_fn(foo, 0)).toEqual(false);
    expect(binary_fn(foo, 6942070)).toEqual(false);
});
