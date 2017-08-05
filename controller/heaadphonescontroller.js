app.controller("headcont", function ($scope, tabfactory) {
    console.log("Inside controller of headphones");
    var promise = tabfactory.getjson();

    function pass(data) {
        $scope.tablets = data.data;
    }

    function fail(er) {
        $scope.error = er;
    }
    promise.then(pass, fail);
});