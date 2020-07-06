function arrayDiff(a, b) {
    return (a.filter(number => b.indexOf(number) === -1));
}

/* TEST */
// Test.assertDeepEquals(array_diff([1,2], [1]), [2], "a was [1,2], b was [1]");
// Test.assertDeepEquals(array_diff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
// Test.assertDeepEquals(array_diff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
// Test.assertDeepEquals(array_diff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
// Test.assertDeepEquals(array_diff([], [1,2]), [], "a was [], b was [1,2]");