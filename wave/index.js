function wave(str){
    // Create an array and split it into the number of characters
    return str.split("")
                // Put together the first part, uppercased character and the last part of the string
                .map((character, index) => { 
                    return str.substr(0, index) + character.toUpperCase() + str.substr(index+1);
                })
                // Remove dupplicates arrays of the initial string
                .filter((wave) => wave !== str ); 
}

/* TEST */
// result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
// Test.assertDeepEquals(wave("hello"),result, "Should return: '"+result+"'");

// result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
// Test.assertDeepEquals(wave("codewars"), result, "Should return: '"+result+"'");

// result = [];
// Test.assertDeepEquals(wave(""), result, "Should return: '"+result+"'");

// result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
// Test.assertDeepEquals(wave("two words"), result, "Should return: '"+result+"'");

// result = [" Gap ", " gAp ", " gaP "];
// Test.assertDeepEquals(wave(" gap "), result, "Should return: '"+result+"'");