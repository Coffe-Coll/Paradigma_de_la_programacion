 //1 - Get
var settings = {
  "url": "http://localhost:3000/Telefonos/e380",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//2 - Get
var settings = {
  "url": "http://localhost:3000/Telefonos/482e",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//3 - Get
var settings = {
  "url": "http://localhost:3000/Telefonos/85f0",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});


//4 - Post
var settings = {
  "url": "http://localhost:3000/Telefonos",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "firts_name": "David",
    "last_name": "Coll",
    "email_address": "loro24@gmlb.com",
    "ip_address": "22.217.11.30",
    "movile_device": "TECNO",
    "movile_device_os": "Android 13, OriginOS 2.0",
    "movile_release": 2024,
    "id": "dc16"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//5 - Post
var settings = {
  "url": "http://localhost:3000/Telefonos",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "firts_name": "Erick",
    "last_name": "De La Hoz",
    "email_address": "erick53@gmlb.com",
    "ip_address": "43.237.21.40",
    "movile_device": "Haweii",
    "movile_device_os": "Android 13, OriginOS 2.0",
    "movile_release": 2022,
    "id": "eh90"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//6 - Post
var settings = {
  "url": "http://localhost:3000/Telefonos",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "firts_name": "Monica",
    "last_name": "Garcia",
    "email_address": "monicagar36@gmlb.com",
    "ip_address": "53.247.31.50",
    "movile_device": "Redmi",
    "movile_device_os": "Android 14, OriginOS 2.0",
    "movile_release": 2023,
    "id": "mg36"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//7 - Put
var settings = {
  "url": "http://localhost:3000/Telefonos/4eee",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "firts_name": "nombre cambiado",
    "last_name": "Kettlestringes",
    "email_address": "gmail cambiado",
    "ip_address": "136.10.219.196",
    "movile_device": "Nokia",
    "movile_device_os": "Feature phone",
    "movile_release": 2013,
    "id": "4eee"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//8 - Put
var settings = {
  "url": "http://localhost:3000/Telefonos/882d",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "firts_name": "Jillayne",
    "last_name": "Velez (apellido cambiado)",
    "email_address": "jgrinov2@stumbleupon.com",
    "ip_address": "123.456.789 (ip cambuiado)",
    "movile_device": "Xiaomi",
    "movile_device_os": "Proprietary OS",
    "movile_release": 2020,
    "id": "882d"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//9 - Delete
var settings = {
  "url": "http://localhost:3000/Telefonos/3950",
  "method": "DELETE",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "firts_name": "Brynne",
    "last_name": "Lidgey",
    "email_address": "blidgey9@amazon.de",
    "ip_address": "247.201.103.41",
    "movile_device": "NIU",
    "movile_device_os": "Android 2.2",
    "movile_release": 2012,
    "id": "3950"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

//10 - Delete
var settings = {
  "url": "http://localhost:3000/Telefonos/85f0",
  "method": "DELETE",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "firts_name": "Wenona",
    "last_name": "Skelhorne",
    "email_address": "wskelhorne4@people.com.cn",
    "ip_address": "47.251.113.4",
    "movile_device": "Infinix",
    "movile_device_os": "Android 6.0",
    "movile_release": 2017,
    "id": "85f0"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});