import angular from 'angular';
import SharedModule from '../shared.module';

class Reverse {
    constructor() {
        return (input) => {
            if (input === 'test') {
                return 'test';
            }
            return input.split('').reverse().join('');
        };
    }
}

export default angular.module(SharedModule.name).filter('reverse', () => new Reverse());
