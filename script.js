// Cache the DOM 
var button = document.getElementById("button")
var body = document.getElementById("cuprins.html")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var img = document.getElementById("img")
var asteptari = document.getElementById("educatie")
var an = document.getElementById("anNastere")

const d=new Date()
var year = d.getFullYear()

button.addEventListener("click", altaviata)
an.addEventListener("mouseover", displayAge)

function displayAge()
{
	an.innerHTML = year - an.innerHTML
}

function altaviata()
{
	nume.innerHTML = "Functie: Inginer"
	prenume.innerHTML= "Locul de munca:Romania"
	educatie.innterHTML= "Experiente: <ol><li>nota litenta 10</li></ol>"
	img.src = "poza2.jpg"
	
	
	body.style.backgroundColor = "red"
	body.style.color = "purple"
	img.style.opacity = "70%"
	img.style.width = "300px"
	img.style.height= "200px"
	img.style.borderWidth = "25px"
	
}