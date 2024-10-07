outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1) {
            break outerLoop; // Exits the outer loop entirely!
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}
