window.onload = function()
{
    document.getElementById("btnHolaMundo").onclick = HolaMundo;
    document.getElementById("btnIntercambiar").onclick = Intercambiar;
    document.getElementById("btnSuma").onclick = Suma;
    document.getElementById("btnLimpiar").onclick = Limpiar;
    document.getElementById("txtTexto1").onblur = revisarTexto;
    document.getElementById("txtTexto4").onfocus = mensajeDisplay;

    var  etiquetasInput = document.getElementsByTagName("input");

    for(var i=0; i<etiquetasInput.length; i++)
    {
        if(etiquetasInput[i].type == "text")
        {
            etiquetasInput[i].onclick = Resalta;
        }
    }
}
    
function HolaMundo()
{
    document.getElementById("txtTexto1").value = "Hola Mundo";
    document.getElementById("txtTexto2").value = "Hola universo";
}

function Intercambiar()
{
    var temp = document.getElementById("txtTexto1").value;
    document.getElementById("txtTexto1").value = document.getElementById("txtTexto2").value;
    document.getElementById("txtTexto2").value = temp;
}

function Suma()
{
    var num1 = document.getElementById("txtTexto1").value;
    var num2 = document.getElementById("txtTexto2").value;
    var temp = parseInt(num1) + parseInt(num2);

    alert("La suma de los numeros es: "+ temp);
}

function Limpiar()
{
    var  etiquetasInput = document.getElementsByTagName("input");

    for(var i=0; i<etiquetasInput.length; i++)
    {
        if(etiquetasInput[i].type == "text")
        {
            etiquetasInput[i].value = " ";
        }
    }
}

function Resalta()
{
    document.getElementById("txtResultado").value = 15;
}

function revisarTexto()
{
    if(document.getElementById("txtTexto1").value == "Jorge")
    {
        alert("Bienvenido Jorge!");
    }
    else
    {
        alert("Tu no eres Jorge!");
    }
}

function mensajeDisplay()
{
    var  etiquetasInput = document.getElementsByTagName("input");

    for(var i=0; i<etiquetasInput.length; i++)
    {
        if(etiquetasInput[i].type == "text")
        {
            etiquetasInput[i].value = "Ingresa un Dato!";
        }
    }
}