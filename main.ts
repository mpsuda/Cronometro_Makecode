let Número = 0
input.onButtonPressed(Button.A, function () {
    Número = 0
    while (Número <= 10) {
        basic.showNumber(Número)
        basic.pause(1000)
        Número += 1
        basic.showString("Fim")
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    Número = 10
    while (Número >= 0) {
        basic.showNumber(Número)
        basic.pause(1000)
        Número += -1
        basic.showString("Fim")
        basic.pause(1000)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
