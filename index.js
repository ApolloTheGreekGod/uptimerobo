const axios = require("axios").default;
const fs = require("fs");
const urls = fs.readFileSync("./url.txt").toString().split("\n");

const time = () => (new Date().toLocaleTimeString(undefined, { timeZone: "Asia/Kolkata" }));

const uptimerobo = async () => {
    setInterval(() => {
        urls.forEach(url => {
            axios.get(url).then(() => {
                console.log(`Pong ${url} at ${time()}`);
            }).catch(() => { });
        });
    }, 60 * 1000);
};

uptimerobo();
console.log(`Started Uptimerobo at ${time()}`);
