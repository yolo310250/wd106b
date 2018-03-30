function gcd(m, n) { return n === 0  ? m : gcd(n, m % n); }
console.log('GCD of (10, 4) = ' + gcd(10, 4));