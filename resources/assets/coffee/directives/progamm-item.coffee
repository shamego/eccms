angular.module 'Egecms'
.directive 'programmItem', ->
    restrict: 'E'
    templateUrl: 'directives/programm-item'
    scope:
        item:   '='
        level:  '=?'
        delete: '&delete'
    controller: ($timeout, $element, $scope) ->
        $scope.focusForm = (type) ->
            $timeout ->
                $element.find("input.#{type}-item").last().focus()

        $scope.edit = ->
            $scope.is_editing = true
            $scope.focusForm 'edit'

        $scope.save = (event) ->
            if $scope.item.title.length and event?.keyCode is 13
                $scope.is_editing = false
            if event?.keyCode is 27
                $scope.is_editing = false

        $scope.addChild = ->
            $scope.is_adding = true
            $scope.focusForm 'add'

        $scope.createChild = (event) ->
            if $scope.new_item.title and event?.keyCode is 13
                $scope.item.content = [] if not $scope.item.content
                if $scope.new_item.title.length
                    $scope.item.content.push $scope.new_item
                    resetNewItem()

            if event?.keyCode is 27
                $scope.is_adding = false

        $scope.deleteChild = (child) ->
            $scope.item.content = _.without $scope.item.content, child

        $scope.focusOut = ->
            $scope.is_adding = false
            $scope.is_editing = false

        resetNewItem = ->
            $scope.new_item = {title: '', content: []}

        $scope.level = 1 if not $scope.level
        resetNewItem()