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

describe('getMatrix', function () {
    it('should return the CYK matrix for the given grammar', function () {
        expect(cyk.getMatrix('baaba')).to.deep.equal([
            [["B"], ["A", "C"], ["A", "C"], ["B"], ["A", "C"]],
            [["A", "S"], ["B"], ["S", "C"], ["A", "S"]],
            [undefined, ["B"], ["B"]],
            [undefined, ["S", "C", "A"]],
            [["S", "A", "C"]]
        ]);
        expect(cyk.getMatrix('baa')).to.deep.equal([
            [["B"], ["A", "C"], ["A", "C"]],
            [["A", "S"], ["B"]],
            [undefined]
        ]);
        expect(cyk.getMatrix('aab')).to.deep.equal([
            [["A", "C"], ["A", "C"], ["B"]],
            [["B"], ["S", "C"]],
            [["B"]],
        ]);
    });
});