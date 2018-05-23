/** 
 * Implements the CYK algorithm 
 */
class CYK {
    /**
     * @param {JSON} rules - rules which define the grammar
     */
    constructor(rules) {
        // Store the original copy for the rules so that
        // this instance can be used multiple times on different words
        this._originalRules = rules;

        // More rules are created using the base rules
        // and stored in this property
        this._rules = {};

        // Remember the previous word which was used
        // so that if the current word is the same
        // the previous values can be returned avoiding recalculations
        this._previousWord;
        this._substrings;
    }
}