app.factory("headfactory", function ($http, $q) {
    var getJSON = function () {
        var pr = $q.defer();
        $http.get("insert JSON HERE").then(function (data) {
            console.log("Success data");
            pr.resolve(data);
        }, function (er) {
            pr.reject(er);
        });
        return pr.promise;
    }
    return {
        "getjson": getJSON
    };
});