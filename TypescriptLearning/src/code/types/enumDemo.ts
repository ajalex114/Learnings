
enum temperature {
    cold,
    hot
};


function enumDemo(temp: temperature) {
    
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