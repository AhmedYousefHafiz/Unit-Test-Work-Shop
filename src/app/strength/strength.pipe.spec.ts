import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {

    it('should display weak if value less than 5', () => {
        let pipe = new StrengthPipe();

        const val = pipe.transform(5);

        expect(val).toEqual('5 (weak)');
    });

    it('shoul display strong if value equal 10', () => {

        let pipe = new StrengthPipe();

        const val = pipe.transform(10);

        expect(val).toEqual('10 (strong)');
    });
});