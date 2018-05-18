var temperature;
(function (temperature) {
    temperature[temperature["cold"] = 0] = "cold";
    temperature[temperature["hot"] = 1] = "hot";
})(temperature || (temperature = {}));
;
function enumDemo(temp) {
    switch (temp) {
        case temperature.cold:
            console.log("its cold");
            break;
        case temperature.hot:
            console.log("its hot");
            break;
    }
}
enumDemo(temperature.cold);
//# sourceMappingURL=enumDemo.js.map