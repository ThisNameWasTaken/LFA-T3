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

    /**
     * Splits a word into key - value piars where either the key
     * or the value is at least one character long
     * @param {String} word - the word to split
     * @returns {JSON} key - value pairs that when concatenated,
     * they reconstruct the given word
     */
    _splitWord(word) {
        let splits = {};

        for (let i = 1; i < word.length; i++) {
            splits[word.substring(0, i)] = word.substring(i, word.length);
        }

        return splits;
    }
}