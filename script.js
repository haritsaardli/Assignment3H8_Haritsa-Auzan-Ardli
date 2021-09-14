const BASE_URL = "https://indonesia-covid-19.mathdro.id/api/provinsi";
const tabel = document.getElementById("table");
const totalPostif = document.getElementById("positif")
const totalSembuh = document.getElementById("sembuh")
const totalMeninggal = document.getElementById("meninggal")


fetch(BASE_URL)
    .then((Response)=>Response.json())
    .then((data) => {

        const dataX = data.data;

        for(let i =0; i<dataX.length - 1; i++)
        {
            // isi <tr>
            const row = table.insertRow(i+1);
            //buat <td> 
            const cell1 =row.insertCell(0);
            const cell2 =row.insertCell(1);
            const cell3 =row.insertCell(2);
            const cell4 =row.insertCell(3);
            
    
            cell1.innerHTML = dataX[i].provinsi;     
            cell2.innerHTML = dataX[i].kasusPosi;
            cell3.innerHTML = dataX[i].kasusSemb;
            cell4.innerHTML = dataX[i].kasusMeni;

            
        }

        const positif = (dataX.reduce((n, {kasusPosi}) => n + kasusPosi,0))
        const sembuh = (dataX.reduce((n, {kasusSemb}) => n + kasusSemb,0))
        const meninggal = (dataX.reduce((n, {kasusMeni}) => n + kasusMeni,0))
        
        totalPostif.innerHTML = `Positif : ${positif}`
        totalSembuh.innerHTML = `Sembuh : ${sembuh}`
        totalMeninggal.innerHTML = `Meninggal : ${meninggal}`
    });

      