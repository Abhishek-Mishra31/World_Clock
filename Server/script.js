
let Details = document.getElementById('Details');
let Details1 = document.getElementById('Details1');
let Details2 = document.getElementById('Details2');
let Day = document.getElementById('day');
let Day1 = document.getElementById('day1');
let Day2 = document.getElementById('day2');
var city = 'Delhi';

const options = {
    headers: {
        'X-Api-Key': '78zoHlN2rVoVu5qoN1MZiw==ulIhy59Mhtkxuq8S'
    },
};

async function getTime() {
    let url = 'https://api.api-ninjas.com/v1/worldtime?city=' + city;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        Details.innerHTML = result.datetime;
        Day.innerHTML = result.day_of_week;
    } catch (error) {
        console.log(error);
    }
};



async function getTimeUsa() {
    var city = 'wasington';
    let url = 'https://api.api-ninjas.com/v1/worldtime?city=' + city;

    try {
        const response1 = await fetch(url, options);
        const result1 = await response1.json();
        Details1.innerHTML = result1.datetime;
        Day1.innerHTML = result1.day_of_week;
    } catch (error) {
        console.log(error);
    }
}

async function getTimeChina() {
    var city = 'Shanghai';
    let url = 'https://api.api-ninjas.com/v1/worldtime?city=' + city;

    try {
        const response2 = await fetch(url, options);
        const result2 = await response2.json();
        Details2.innerHTML = result2.datetime;
        Day2.innerHTML = result2.day_of_week;
    } catch (error) {
        console.log(error);
    }
}

setInterval(() => {
    getTime();
    getTimeUsa();
    getTimeChina(), 1000;
})

