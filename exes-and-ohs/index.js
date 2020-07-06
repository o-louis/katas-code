function XO(str) {
    str = str.toLowerCase().split("");
    const nbX = str.filter(x => x === "x");
    const nbO = str.filter(o => o === "o");
    return nbX.length === nbO.length;
}

/* TEST */
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
