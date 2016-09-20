import './assets/less/bootstrap.less';

import 'babel-polyfill';

import angular from 'angular';

import AppModule from './app/app.module';


angular.bootstrap(document, [AppModule.name], { strictDi: true });
