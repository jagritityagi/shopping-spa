app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
        templateUrl: "mobile.html",
        controller: "mobcont"
    }).when("/tablets", {
        templateUrl: "tablets.html",
        controller: "tabcont ",
    }).when("/Laptops", {
        templateUrl: "laptops.html",
        controller: "lapcont ",
    }).when("/headphones", {
        templateUrl: "headphones.html",
        controller: "headcont",
    }).when("/mouse", {
        templateUrl: "mouse.html",
        controller: "mousecont",
    }).when("/printers", {
        templateUrl: "printers.html",
        controller: "printcont ",
    }).otherwise({
        templateUrl:"Error page , No match Found",
        redirectTo:"/"
    });
});