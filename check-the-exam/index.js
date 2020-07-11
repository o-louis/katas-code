function checkExam(array1, array2) {
    let total = 0;
    array1.forEach((correctAnswer, index) => {
        const studentAnswer = array2[index];
        if (studentAnswer !== "") {
            total += (studentAnswer === correctAnswer) ? 4 : -1;
        }
    });
    return (total < 0 ? 0 : total);
}

/* TEST */
// Test.assertEquals(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
// Test.assertEquals(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
// Test.assertEquals(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
// Test.assertEquals(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0); 