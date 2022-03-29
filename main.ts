input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Angry)
    DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
    A = 1
    B = 0
})
input.onButtonPressed(Button.B, function () {
    B = 1
})
let B = 0
let A = 0
DFRobotMaqueenPlusV2.I2CInit()
soundExpression.happy.playUntilDone()
A = 0
A = 0
basic.forever(function () {
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1) {
        DFRobotMaqueenPlusV2.setIndexColor(0, 0x00ff00)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0) {
        DFRobotMaqueenPlusV2.setIndexColor(0, 0xff0000)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1) {
        DFRobotMaqueenPlusV2.setIndexColor(3, 0x00ff00)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 0) {
        DFRobotMaqueenPlusV2.setIndexColor(3, 0xff0000)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR2) == 1) {
        DFRobotMaqueenPlusV2.setIndexColor(2, 0x00ff00)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR2) == 0) {
        DFRobotMaqueenPlusV2.setIndexColor(2, 0xff0000)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL2) == 1) {
        DFRobotMaqueenPlusV2.setIndexColor(1, 0x00ff00)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL2) == 0) {
        DFRobotMaqueenPlusV2.setIndexColor(1, 0xff0000)
    }
})
basic.forever(function () {
    if (B == 1) {
        if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 40)
            basic.showIcon(IconNames.Happy)
        } else {
            // GIRO DERECHA
            // 
            if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1) {
                DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 160)
                DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 30)
            }
            // GIRO IZQUIERDA
            if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 0) {
                DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 30)
                DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 160)
            }
            if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 0) {
                DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
                basic.showIcon(IconNames.Asleep)
            }
        }
    }
})
