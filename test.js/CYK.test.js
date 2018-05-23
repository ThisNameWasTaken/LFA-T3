import { expect } from 'chai';
import CYK from '../CYK';

const rules = {
    'a': ['A', 'C'],
    'b': ['B'],
    'AB': ['S', 'C'],
    'BC': ['S'],
    'BA': ['A'],
    'CC': ['B']
};

let cyk = new CYK(rules);

describe('checkWord', function () {
    it('should check if a word is accepted by the given grammar', function () {
        expect(cyk.checkWord('baaba')).to.equal(true);
        expect(cyk.checkWord('baa')).to.equal(false);
        expect(cyk.checkWord('aab')).to.equal(true);
    });
});
