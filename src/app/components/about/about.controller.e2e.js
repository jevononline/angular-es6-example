

describe('about controller', () => {
    beforeEach(() => {
        browser.get('http://localhost:8080/#/about');
    });
    it('increase/decrease', () => {
        let countElement = element(by.binding('about.count'));
        expect(countElement.getText()).toBe('0');
        let increaseBtn = element(by.buttonText('Increase'));
        increaseBtn.click().then(() => {
            expect(countElement.getText()).toBe('1');
        });
        let decreaseBtn = element(by.buttonText('Decrease'));
        decreaseBtn.click().then(() => {
            expect(countElement.getText()).toBe('0');
        });
    })
});