app.factory("tabletsfactory", function ($http, $q) {
    var getJSON = function () {
        var pro = $q.defer();
        $http.get("INSERT JSON HERE").then(function (data) {
            console.log("Success");
            pro.resolve(data);
        }, function (er) {
            pro.reject(er);
        });
        return pro.promise;
    }
    return {
        "getjson": getJSON
    };
});