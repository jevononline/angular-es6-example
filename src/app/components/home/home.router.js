'use strict';
export default /*@ngInject*/function ($stateProvider) {
    $stateProvider.state('app.home', {
        url: '/',
        /*@ngInject*/
        templateProvider: ($q) => {
            let promise = $q((resolve) => {
                require.ensure([], function () {
                    resolve(require('./index.html'));
                });
            });
            return promise;
        },
        controller: 'HomeController',
        controllerAs: 'home',
        resolve: {
            /*@ngInject*/
            load: ($q, $ocLazyLoad) => {
                let promise = $q((resolve) => {
                    require.ensure([], () => {
                        let module = require('./home.controller').default;
                        $ocLazyLoad.load({ name: module.name }).then(()=>{
                            resolve();
                        });
                    });
                });

                return promise;
            }
        }
    });

}