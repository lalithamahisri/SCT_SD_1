const form = document.getElementById("converterForm");
const temperature = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const result = document.getElementById("result");
const error = document.getElementById("error");
const resetBtn = document.getElementById("resetBtn");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const temp = parseFloat(temperature.value);

    if (isNaN(temp)) {
        error.textContent = "Please enter a valid temperature.";
        result.textContent = "--";
        return;
    }

    error.textContent = "";

    let celsius;

    switch (fromUnit.value) {

        case "celsius":
            celsius = temp;
            break;

        case "fahrenheit":
            celsius = (temp - 32) * 5 / 9;
            break;

        case "kelvin":
            celsius = temp - 273.15;
            break;
    }

    let converted;

    switch (toUnit.value) {

        case "celsius":
            converted = celsius;
            break;

        case "fahrenheit":
            converted = (celsius * 9 / 5) + 32;
            break;

        case "kelvin":
            converted = celsius + 273.15;
            break;
    }

    result.textContent =
        `${converted.toFixed(2)} ${getSymbol(toUnit.value)}`;
});

resetBtn.addEventListener("click", () => {

    temperature.value = "";
    fromUnit.selectedIndex = 0;
    toUnit.selectedIndex = 0;

    result.textContent = "--";
    error.textContent = "";
});

function getSymbol(unit){

    switch(unit){

        case "celsius":
            return "°C";

        case "fahrenheit":
            return "°F";

        case "kelvin":
            return "K";
    }
}