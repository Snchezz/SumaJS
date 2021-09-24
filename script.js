function Suma()
{
    var Numero1=parseInt(document.getElementById('inpnum1').value);
    var Numero2=parseInt(document.getElementById('inpnum2').value);
    var Resultado;
    Resultado=Numero1+Numero2;
    document.getElementById("resultado").innerHTML = "Resultado: " +Resultado;

}       