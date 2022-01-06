const ctx = document.getElementById('grafico').getContext('2d');



fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
.then(response => response.json())
.then(informacion => {

const nombres = informacion.drinks.map((datos) => datos.strDrink )
const años = informacion.drinks.map((datos) => Number(datos.idDrink))
/*const colores = informacion.data.map((datos) => datos.color)*/



const myChart = new Chart(ctx, {
type: 'bar',
data: {
labels: nombres,
datasets: [{
label: '# of Votes',
data: años,
backgroundColor:[
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
    ],
borderColor: [
'rgba(255, 99, 132, 1)',
'rgba(54, 162, 235, 1)',
'rgba(255, 206, 86, 1)',
'rgba(75, 192, 192, 1)',
'rgba(153, 102, 255, 1)',
'rgba(255, 159, 64, 1)'
],
borderWidth: 1
}]
},
options: {
scales: {
y: {
beginAtZero: true
}
}
}
});
});