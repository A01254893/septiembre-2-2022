input.onButtonPressed(Button.A, function () {
    Suma = N1 + N2
    basic.showNumber(Suma)
    Texto = "Sumaste"
})
input.onButtonPressed(Button.AB, function () {
    Multiplicacion = N1 * N2
    basic.showNumber(Suma)
    Texto = "Multiplicaste"
})
input.onButtonPressed(Button.B, function () {
    Resta = N1 - N2
    basic.showNumber(Resta)
    Texto = "Restaste"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(N1)
    basic.showNumber(N2)
    basic.showString(Texto)
})
let Multiplicacion = 0
let Resta = 0
let Suma = 0
let Texto = ""
let N2 = 0
let N1 = 0
N1 = randint(1, 5)
N2 = randint(1, 5)
Texto = ""
Suma = 0
Resta = 0
Multiplicacion = 0
