const BASE_URL = "https://indonesia-covid-19.mathdro.id/api/provinsi";
// const tabel = document.getElementById("table");


fetch(BASE_URL)
    .then((Response)=>Response.json())
    .then((data) => {

        // const datax = JSON.parse(data);
        const datax = data;

        console.log(datax.data);



    });