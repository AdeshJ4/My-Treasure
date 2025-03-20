function compressString(str) {
    let compressed = "";
    let count = 1;  // Start counting from 1

    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 1 && str[i] === str[i + 1]) {
            count++; // Increase count if next char is the same
        } else {
            compressed += str[i] + count; // Append char and its count
            count = 1; // Reset count for next char
        }
    }

    return compressed.length < str.length ? compressed : str; // Return shorter string
}

// Test Cases
console.log(compressString("aaabbaacddd"));
