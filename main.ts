input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(0)
    number = 20
    _4digit.show(number)
})
input.onPinPressed(TouchPin.P2, function () {
    _4digit.show(pins.digitalReadPin(DigitalPin.P1))
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        servos.P1.setAngle(90)
    } else {
    	
    }
})
let distance = 0
let _4digit: grove.TM1637 = null
let number = 0
number = 20
servos.P1.setAngle(0)
basic.showNumber(number)
let 是否被减 = 0
_4digit = grove.createDisplay(DigitalPin.P13, DigitalPin.P14)
_4digit.show(number)
pins.digitalWritePin(DigitalPin.P4, 0)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P8,
    DigitalPin.P9,
    PingUnit.Centimeters
    )
    _4digit.show(number)
    if (distance <= 8) {
        if (是否被减 == 0) {
            servos.P1.setAngle(90)
            number += -1
            是否被减 = 1
            pins.digitalWritePin(DigitalPin.P4, 1)
        }
    } else {
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P4, 0)
        servos.P1.setAngle(0)
        是否被减 = 0
    }
})
