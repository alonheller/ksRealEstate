directives
    .directive('realEstateList', function() {
        return {
            restrict: 'E',
            scope: {
                data: '=',
                selected: '='
            },
            templateUrl: 'directives/real-estates-list/real-estate-list.tpl.html',
            link: function(scope, element, attrs, controllers) {
                scope.onClick = function(selected) {
                    scope.selected = selected.id;
                };

            }
        };
    });


