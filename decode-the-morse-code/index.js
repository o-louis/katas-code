const decodeMorse = function(morseCode) {
    return morseCode.split("   ")
                    .map(word => word.split(" ")
                    .map(signal => MORSE_CODE[signal]).join(""))
                    .join(" ")
                    .trim();
};

/* TEST */
// testAndPrint(decodeMorse('.-'), 'A')
// testAndPrint(decodeMorse('.'), 'E')
// testAndPrint(decodeMorse('..'), 'I')
// testAndPrint(decodeMorse('. .'), 'EE')
// testAndPrint(decodeMorse('.   .'), 'E E')
// testAndPrint(decodeMorse('...---...'), 'SOS')
// testAndPrint(decodeMorse('... --- ...'), 'SOS')
// testAndPrint(decodeMorse('...   ---   ...'), 'S O S')