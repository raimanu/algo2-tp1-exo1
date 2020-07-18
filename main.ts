input.onButtonPressed(Button.A, function () {
    if (x > 0 && x <= 4) {
        led.unplot(x, y)
        led.plot(x - 1, y)
        x = x - 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (x >= 0 && x <= 3) {
        led.unplot(x, y)
        led.plot(x + 1, y)
        x = x + 1
    }
})
let y = 0
let x = 0
x = 0
y = 0
led.plot(0, 0)
basic.pause(1000)
basic.forever(function () {
    if (x == 4 && y == 0) {
        while (x != 0) {
            led.unplot(x, y)
            led.plot(x - 1, y)
            x = x - 1
            basic.pause(1000)
        }
    } else {
        while (x >= 0 && x <= 3) {
            led.unplot(x, y)
            led.plot(x + 1, y)
            x = x + 1
            basic.pause(1000)
        }
    }
})
basic.forever(function () {
	
})
