let stappen = 0
input.onButtonPressed(Button.A, function () {
    stappen = 0
    basic.showNumber(stappen)
})
input.onGesture(Gesture.ThreeG, function () {
    stappen += 1
})
