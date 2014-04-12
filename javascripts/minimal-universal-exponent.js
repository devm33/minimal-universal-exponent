function min_unv_exp(num) {
    /* Returns a number representing the minimal universal exponent
     * of a positive integer num, which is assumed to be valid */
     
    var e = 1; /* This will be the returned exponent, note: needs to be
    one for the first lcm to work */

    /* Iterate through prime factors, computing lcm of each's totient */
    prime_factorization(num).forEach(function(factor){
        if(factor.p === 2) {
            if(factor.e == 2) {
                e = lcm(e, 2);
            }
            else if(factor.e > 2) {
                e = lcm(e, Math.pow(2, factor.e - 2));
            }
        }
        else {
            e = lcm(e, Math.pow(factor.p, factor.e - 1) * (factor.p - 1));
        }
    });
    
    return e;
}

function prime_factorization(n) {
    /* Returns an array of prime factors (in least sorted order)
     * where each factor is an object of the form
     * {'p': 7, 'e': 4}
     * where p is the prime base and e is the exponent to which that
     * factor is raised in the factorization of n
     */
    var factors = [], e;
    for(var p = 2; p <= n; p++) {
        e = 0;
        while(n % p == 0) {
            n = n / p;
            e++;
        }
        if(e > 0) {
            factors.push({'p':p,'e':e});
        }
    }
    return factors;
}

function gcd(a, b){
    /* Returns greatest common divisor of two (assumed) positive integers
     * Uses Euclidean algorithm
     */
    var t;
    while (b != 0){
        t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function lcm(a, b){
    /* Returns least common multiple of two (assumed) positive integers
     * Uses gcd function above
     */
    return (a * b / gcd(a, b));
}
