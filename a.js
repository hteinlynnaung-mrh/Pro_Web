// CommonJS Module (CJS) 
/* Module is using the connection between codefile */

const PI = 3.14;

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

module.exports = { PI, add}; // export two function to the b.js