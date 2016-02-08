# angular-fda-round-filter
Angular filter for applying fda rounding to nutrition values

Include lib file
```html
<script type="text-javascript" src="/bower_components/angular-fda-round-filter/angular-fda-round-filter.js">
```

Include the dependency in your app
```js
angular.module('app', ['nix.fda-round-filter']);
```

Usage
```js
angular.module('app')
  .controller('AppCtrl', ['$scope', '$filter', function($scope, $filter){
    $scope.calories = $filter('fdaRound')(309, 'calories');
  }]);
```

```html
<span>{{309 | fdaRound: 'calories'}}<span>
```

Accepted nutrient values

- calories
- fat_calories
- total_fat
- saturated_fat
- trans_fat
- cholesterol
- sodium
- total_carb
- fibers
- sugars
- protein
