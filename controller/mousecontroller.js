
app.controller("mousecont", function ($scope, tabfactory) {
    console.log("Inside controller of mouse");
    var promise = tabfactory.getjson();

    function pass(data) {
        $scope.tablets = data.data;
    }

    function fail(er) {
        $scope.error = er;
    }
    promise.then(pass, fail);
});