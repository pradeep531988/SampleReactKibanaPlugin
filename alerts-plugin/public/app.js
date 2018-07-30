import { uiModules } from 'ui/modules';
import uiRoutes from 'ui/routes';

import 'ui/autoload/styles';
import React from 'react';
import chrome from 'ui/chrome';
import { render, unmountComponentAtNode } from 'react-dom';
import { Main } from './components/main';
import 'ui/private';

uiRoutes.enable();

const app = uiModules.get('app/alerts-plugin', []);
app.directive('alertsApp', function (reactDirective) {
  return reactDirective(Main);
});


app.config($locationProvider => {
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false,
    rewriteLinks: false,
  });

});
app.config(stateManagementConfigProvider =>
  stateManagementConfigProvider.disable()
);

function RootController($scope, $element, $http, Private) {

  const renderUi = function ($http) {

    const domNode = document.getElementsByClassName('app-wrapper-panel')[0];
    // render react to DOM
    render(<Main />, domNode);

    // unmount react on controller destroy
    $scope.$on('$destroy', () => {
      unmountComponentAtNode(domNode);
    });
  };


  return renderUi($http);

}

chrome.setRootController('alertsReactPlugin', RootController);