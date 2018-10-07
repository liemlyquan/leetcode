/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let caseMapping = {
        A: "a",
        B: "b",
        C: "c",
        D: "d",
        E: "e",
        F: "f",
        G: "g",
        H: "h",
        I: "i",
        J: "j",
        K: "k",
        L: "l",
        M: "m",
        N: "n",
        O: "o",
        P: "p",
        Q: "q",
        R: "r",
        S: "s",
        T: "t",
        U: "u",
        V: "v",
        W: "w",
        Y: "y",
        Z: "z"
    }
    return str.split("").map(char => {
        if (char in caseMapping) {
            return caseMapping[char];
        } 
        return char;
    }).join("")
};