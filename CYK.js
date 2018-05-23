/**
 * @returns {JSON} a clone to the object's instance
 */
Object.prototype.clone = function () {
    return JSON.parse(JSON.stringify(this));
};

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
     * Applies the CYK algorithm for a given word
     * @param {String} word - the word to apply the CYK algorithm for
     */
    _cyk(word) {
        // If it is the same word as last time
        if (this._previousWord == word) {
            // Just use the previous values
            return;
        }

        // Use the original rules
        this._rules = this._originalRules.clone();

        // Get all word's substrings
        this._substrings = this._getAllSubstrings(word);

        // Skip the single character substrings
        for (let i = word.length; i < this._substrings.length; i++) {
            const substring = this._substrings[i];
            // Split each substring into key - value pairs
            const substringPair = this._splitWord(substring);

            for (const key in substringPair) {
                const cartesianProduct = this._cartesianProduct(key, substringPair[key]);

                // Go through all of the elements of the cartesian product
                for (const element of cartesianProduct) {
                    // If there is a rule for the element
                    if (this._rules[element]) {
                        // If there is no rule for the substring
                        if (!this._rules[substring]) {
                            // Create an empty one
                            this._rules[substring] = [];
                        }

                        // For each element inside the rule for the cartesianProduct's element
                        for (const elem of this._rules[element]) {
                            // If the element was not already added to the rule
                            if (this._rules[substring].indexOf(elem) == -1) {
                                // Add it to the rule
                                this._rules[substring].push(elem);
                            }
                        }
                    }
                }
            }
        }

        // Remember the last used word
        this._previousWord = word;
    }

    /**
     * @param {String} word - the word to get the substrings from
     * @returns {Array<String>} all of the word's substrings
     */
    _getAllSubstrings(word) {
        let substrings = [];

        for (let i = 1; i < word.length; i++) {
            for (let start = 0; start + i <= word.length; start++) {
                substrings.push(word.substring(start, start + i));
            }
        }

        substrings.push(word);

        return substrings;
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

    /**
     * @param {String} word1 - product's first word
     * @param {String} word2 - product's second word
     * @returns {Array<string>} the cartesian product for the given words
     */
    _cartesianProduct(word1, word2) {
        if (!word1 || !word2) {
            return [];
        }

        if (!this._rules[word1] || !this._rules[word2]) {
            return [];
        }

        let cartesianProduct = new Set();

        for (const transition1 of this._rules[word1]) {
            for (const transition2 of this._rules[word2]) {
                cartesianProduct.add(transition1 + transition2);
            }
        }

        return cartesianProduct;
    }
}