let prev_beep = 0
let curr_beep = 0
let prev_angle = 0
let fb_joystick = 0
radio.setGroup(1)
basic.forever(function () {
    fb_joystick = pins.analogReadPin(AnalogPin.P1)
    if (fb_joystick <= 400 || fb_joystick >= 600) {
        radio.sendValue("FB", fb_joystick)
    } else {
        radio.sendValue("FB", 0)
    }
    fb_joystick = pins.analogReadPin(AnalogPin.P0)
    if (prev_angle - fb_joystick > 5 || fb_joystick - prev_angle > 5) {
        radio.sendValue("LR", fb_joystick)
    }
    prev_angle = fb_joystick
    curr_beep = pins.digitalReadPin(DigitalPin.P2)
    if (curr_beep != prev_beep) {
        if (prev_beep == 0) {
            radio.sendValue("beep", 1)
        } else {
            radio.sendValue("beep", 0)
        }
        prev_beep = curr_beep
    }
})
