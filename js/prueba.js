var  opcion= parseInt(prompt("Ingrese una opcion:\n" +
    "1. suma\n" +
    "2. resta\n" +
    "3. multiplicacion\n" +
    "4. division\n" +
    "5. resto-modulo\n" +
    "6. menor que\n" +
    "7. mayor que"));
    var num1 = parseInt(prompt("Ingrese un numero"));
    var num2 = parseInt(prompt("Ingrese otro numero"));
switch(opcion){
    case 1:
        var suma = num1 + num2; 
        document.write("el total de la suma es:" + suma);
    break;
    case 2:
        var resta = num1 - num2; 
        document.write("el total de la resta es:" + resta);
    break;  
    case(3):
        var multiplicacion = num1 * num2; 
        document.write("el total de la multiplicacion es:" + multiplicacion);
    break;
    case(4):
        var division = num1 / num2; 
        document.write("el total de la division es:" + division);
    break;
    case(5):
       var  restoModulo = (num1 / 100) * num2; 
       document.write("el total de la resto-modulo es:" + restoModulo);
    break; 
    case(6):
        var menorQue = Math.min(num1,num2); 
        document.write("el total de la menor que es:" + menorQue);
    break; 
    case(7):
        var mayorQue = Math.max(num1,num2); 
        document.write("el total de la mayor que es:" + mayorQue);
    default:
        document.write("Esta opcion no existe");
    break;
}






