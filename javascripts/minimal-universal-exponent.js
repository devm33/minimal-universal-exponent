function min_unv_exp(num) {
    /* Returns a number representing the minimal universal exponent
     * of a positive integer num, which is assumed to be valid */
    var e = 0;
    //TODO
    
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
        while(n % e == 0) {
            n = n / p;
            e++;
        }
        if(e > 0) {
            factors.push({'p':p,'e':e});
        }
    }
    return factors;
}
