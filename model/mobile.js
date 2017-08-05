app.factory("mobFactory", Function($http, $q) {
        var getJSON = function () {
            var defered = $q.defer();
            console.log("Calling JSON");
            $http.get("input JSON").then(function (data) {
                    console.log("inside success" + data);
                    defered.resolve(data);
                }, function (er){
                defered.reject(er);
            });
            return defered.promise;
    
    }
        return{"getjson:getJSON"};
});
