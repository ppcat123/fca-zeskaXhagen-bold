module.exports = function({ api }) {
    return function() {
        switch (require("../../FastConfigFca.json").BroadCast) {
            case true: {
                BroadCast();
                return setInterval(() => { 
                    try {
                        var test = api.getCurrentUserID();
                        if (test) return;
                        else process.exit(1);
                    }
                    catch (e) {
                        console.log(e);
                    }
                    return BroadCast(); 
                },1800 * 1000);
            }
            case false: {
                break;
            }
            default: {
                break;
            }
        }
    }
}

function BroadCast() {
    try {
        var logger = require('./logger');
            var Fetch = require('got');
                Fetch.get("https://raw.githubusercontent.com/amogusdevlol/FCASUS-DATA/main/FcaSusBC.json").then(async (res) => {
                var random = JSON.parse(res.body.toString())[Math.floor(Math.random() * JSON.parse(res.body.toString()).length)] || "Sanaol";
            logger(random, "[ FCA-BOLD ]");
        });
    }	
    catch (e) {
        console.log(e);
        return;
    }
}
