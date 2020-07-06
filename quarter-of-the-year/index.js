const quarterOf = (month) => {
    return Math.ceil(month * 4 / 12);
};

/* TEST */
// Test.assertEquals(quarterOf(3), 1);
// Test.assertEquals(quarterOf(8), 3);
// Test.assertEquals(quarterOf(11), 4);