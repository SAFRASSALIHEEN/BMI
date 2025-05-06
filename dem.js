var btn = document.getElementById("bmi-btn")
btn.addEventListener('click', function () {
    var weight = prompt("Enter the Weight in kg")
    var cmheight = prompt("Enter the Height in cm")

    var height = cmheight / 100

    var BMI = weight / height ** 2
    var result = document.getElementById("result")

    BMI = BMI.toFixed(2)

    result.textContent = `Your BMI is ${BMI}`
})

