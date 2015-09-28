'use strict';

angular.module('ngProperPossessive')
    .directive('properPossessive', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                function properize(name) {
                    var ending = name.substr(name.length-1) !== 's' ? 's' : '';
                    return name + "'" + ending;
                }
                element.text(properize(attrs.name));
            }
        }
    });