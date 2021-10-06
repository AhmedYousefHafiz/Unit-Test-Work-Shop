describe('Test Lab', () => {
    let sut:any;

    beforeEach(() => {
        sut = {};
    });

    it('should be true if true',()=>{

        //arrange
        sut.a = false;

        //act
        sut.a = true;

        //assert
        expect(sut.a).toBe(true);

    })
})
