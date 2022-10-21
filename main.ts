let fb_joystick = 0
radio.setGroup(1)
basic.forever(function () {
    fb_joystick = pins.analogReadPin(AnalogPin.P1)
    if (fb_joystick <= 450 || fb_joystick >= 550) {
        radio.sendValue("FB", fb_joystick)
    } else {
        radio.sendValue("FB", 0)
    }
    fb_joystick = pins.analogReadPin(AnalogPin.P0)
    if (fb_joystick <= 450 || fb_joystick >= 550) {
        radio.sendValue("LR", fb_joystick)
    }
})
