input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    myModules.motorL.run(-100)
})
input.onButtonPressed(Button.A, function () {
    myModules.motorD3B.run(33)
    basic.pause(100)
    myModules.motorD3B.run(66)
    basic.pause(100)
    myModules.motorD3B.run(99)
    basic.pause(100)
    myModules.motorD3B.run(100)
    basic.pause(100)
    myModules.motorD3B.run(0)
})
input.onButtonPressed(Button.AB, function () {
    myModules.motorL.run(100)
    myModules.motorR.run(100)
})
input.onButtonPressed(Button.B, function () {
    myModules.motorL.run(-100)
    myModules.motorR.run(-100)
})
input.onGesture(Gesture.Shake, function () {
    myModules.motorR.run(100)
})
input.onGesture(Gesture.LogoDown, function () {
    myModules.motorR.run(-100)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    myModules.motorL.run(0)
    myModules.motorR.run(0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    myModules.motorL.run(100)
})
myModules.motorL.setEnabled(true)
myModules.motorR.setEnabled(true)
myModules.motorD3B.setEnabled(true)
myModules.ledVL.setBrightness(100)
myModules.ledVR.setBrightness(100)
myModules.ledVL.setAll(0xff0000)
myModules.ledVR.setAll(0xff0000)
basic.forever(function () {
	
})
