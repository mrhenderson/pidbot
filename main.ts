let last = 0
let Kd = 0
let d = 0
let Kp = 0
let Ki = 0
let t = 0
let i = 0
let e = 0
let steering = 0
/**
 * A comment all by itself Block comments are multi-line comments
 */
steering = 0
e = 0
t = sensors.color4.light(LightIntensityMode.Reflected)
i = 0
Ki = 0
Kp = 1
last = 0
d = 0
Kd = 0
motors.largeB.setInverted(false)
motors.largeC.setInverted(false)
motors.largeBC.tank(25, 25)
forever(function () {
    e = t - sensors.color4.light(LightIntensityMode.Reflected)
    i = i + e
    steering = e * Kp + i * Ki + d * Kd
    brick.showValue("Steering", steering, 1)
    brick.showValue("LMotor", motors.largeB.speed(), 2)
    brick.showValue("RMotor", motors.largeC.speed(), 3)
    motors.largeBC.steer(steering, 50)
    last = e
})

