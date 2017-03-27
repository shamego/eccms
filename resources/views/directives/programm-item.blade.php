<h2 ng-if="level > 1" ng-mouseover="show_controls = true" ng-mouseleave="show_controls = false">
    <span ng-show="!is_editing">
        @{{ levelstring }} @{{ item.title }}
        <span ng-show="show_controls">
            <i ng-click="edit()" class="fa fa-pencil" aria-hidden="true"></i>
            <i ng-click="delete()" class="fa fa-minus" aria-hidden="true"></i>
            <i ng-click="addChild()" class="fa fa-plus" aria-hidden="true"></i>
        </span>
    </span>
    <input class="form-control edit-item" placeholder="пункт программы"
           ng-model="item.title"
           ng-show="is_editing"
           ng-keyup="save($event)"
           ng-blur="focusOut()"
    >
</h2>

<ul>
    <li ng-repeat="child in item.content">
        <programm-item item="child" level="level ? level + 1 : 0" levelstring="getChildLevelString($index)" delete="deleteChild(child)"></programm-item>
    </li>
    <li>
        <span ng-show="level == 1 && !is_adding">
            <i ng-click="addChild()" class="fa fa-plus" aria-hidden="true"></i>
        </span>
        <input class="form-control add-item" placeholder="подпункт программы"
               ng-model="new_item.title"
               ng-show="is_adding"
               ng-keyup="createChild($event)"
               ng-blur="focusOut()"
        >
    </li>
</ul>

