
import angular from 'angular';
import AbouteModule from './about.module';
class AboutController {
    /*@ngInject*/
    constructor($http) {
        this.$http = $http;
        this.count = 0;
        this.cost = 123456789.987654321;
    }
    increase() {
        this.count++;
    }
    decrease() {
        this.count--;
    }
}
export default angular.module(AbouteModule.name).controller('AboutController', AboutController);