function solution(string) {
    let msg = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i].charCodeAt(0) >= 65 &&
            string[i].charCodeAt(0) <= 90) {
            msg += ' '
        }
        msg += string[i];
    }
    return msg;
}

/* TEST */
// Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
// Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
// Test.assertEquals(solution('helloWorld!'), 'camel Casing Test', 'Unexpected result')