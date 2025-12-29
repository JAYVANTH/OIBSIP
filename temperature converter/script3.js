function convertTemp() {
    const degrees = document.getElementById("degrees").value;
    const type = document.getElementById("type").value;
    const result = document.getElementById("result");

    if (degrees === "") {
        result.textContent = "Please enter a number";
        return;
    }

    let convertedValue = "";
    if (type === "celsius") {
        const f = (degrees * 9/5) + 32;
        const k = parseFloat(degrees) + 273.15;
        convertedValue = "Fahrenheit:" + f.toFixed(2) + " °F" + "   " + "Kelvin:" +  k.toFixed(2) + " k";

    }

    else if (type === "fahrenheit" ) {
        const c = (degrees - 32) * 5/9;
        const k = (degrees - 32) * 5/9 + 273.15;
        convertedValue = "Celsius:" + c.toFixed(2) + " °C" + "   " + "Kelvin:" + k.toFixed(2) + " k";
    }

    else if (type === "kelvin") {
        const c = degrees - 273.15;
        const f = (degrees - 273.15) * 9/5 + 32;
        convertedValue = "Celsius:" + c.toFixed(2) + " °C" + "   " + "Fahrenheit" +  f.toFixed(2) + " °F";

    }
    result.textContent = convertedValue;

}