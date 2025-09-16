// COMMENT ----> function prinitng click when button click

// function generateMessage () {
//     console.log("Click!")
//     return true
// }


// COMMENT ---> function to generate a random color
function generateRandomColor() {
    const redValue = Math.floor(Math.random() * 255 + 1)
    const greenValue = Math.floor(Math.random() * 255 + 1)
    const blueValue = Math.floor(Math.random() * 255 + 1)

    console.log(redValue)
    console.log(greenValue)
    console.log(blueValue)

    const rgbString = `rgb(${redValue},${greenValue},${blueValue})`
    document.body.style.backgroundColor = rgbString
}

document.getElementById("GenerateColorButton").addEventListener("click", generateRandomColor)

// reset 
function resetColor (){
    const reset = "255, 255, 255"

    const resetColor = `rgb(${reset})`
    document.body.style.backgroundColor = resetColor
}

document.getElementById("ResetColorButton").addEventListener("click", resetColor)