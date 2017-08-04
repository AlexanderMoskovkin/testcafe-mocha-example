describe('Mocha', () => {
    it('Mocha test', () => {
        var a = false;

        if(a)
            throw new Error('Never fails');
    });
});