// Estado autómata cinco
function AutomataTecla (estado: number, tecla: number) {
    if (estado == 0) {
        if (tecla == 0) {
            estado = 0
        } else {
            estado = 1
        }
    } else if (estado == 1) {
        if (tecla == 0) {
            estado = 0
        } else {
            estado = 2
        }
    } else {
        if (estado == 2) {
            if (tecla == 0) {
                estado = 0
            } else {
                estado = 2
            }
        }
    }
    return estado
}
let interrupcion = 0
let ejey = 0
let ejex = 0
let mando = 0
let automata_B = 0
let automata_A = 0
let automata_F = 0
let automata_E = 0
let automata_D = 0
let automata_C = 0
let pulsado = 0
let estado = 0
radio.setGroup(10)
joystickbit.initJoystickBit()
// Estado autómata tres
basic.forever(function () {
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        pulsado = 1
    } else {
        pulsado = 0
    }
    automata_C = AutomataTecla(automata_C, pulsado)
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        pulsado = 1
    } else {
        pulsado = 0
    }
    automata_D = AutomataTecla(automata_D, pulsado)
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        pulsado = 1
    } else {
        pulsado = 0
    }
    automata_E = AutomataTecla(automata_E, pulsado)
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        pulsado = 1
    } else {
        pulsado = 0
    }
    automata_F = AutomataTecla(automata_F, pulsado)
    if (input.buttonIsPressed(Button.A)) {
        pulsado = 1
    } else {
        pulsado = 0
    }
    automata_A = AutomataTecla(automata_A, pulsado)
    if (input.buttonIsPressed(Button.B)) {
        pulsado = 1
    } else {
        pulsado = 0
    }
    automata_B = AutomataTecla(automata_B, pulsado)
    if (mando == 0) {
        if (automata_B == 1) {
            mando = 1
        }
    } else if (mando == 1) {
        if (automata_D == 1) {
            mando = 2
        }
        if (automata_E == 1) {
            mando = 0
        }
        if (automata_A == 1) {
            mando = 0
        }
    } else if (mando == 2) {
        if (automata_D == 1) {
            mando = 3
        }
        if (automata_E == 1) {
            mando = 1
        }
        if (automata_A == 1) {
            mando = 0
        }
    } else if (mando == 3) {
        if (automata_D == 1) {
            mando = 4
        }
        if (automata_E == 1) {
            mando = 2
        }
        if (automata_A == 1) {
            mando = 0
        }
    } else if (mando == 4) {
        if (automata_D == 1) {
            mando = 5
        }
        if (automata_E == 1) {
            mando = 3
        }
        if (automata_A == 1) {
            mando = 0
        }
    } else if (mando == 5) {
        if (automata_D == 1) {
            mando = 5
        }
        if (automata_E == 1) {
            mando = 4
        }
        if (automata_A == 1) {
            mando = 0
        }
    } else {
        mando = 0
    }
    ejex = joystickbit.getRockerValue(joystickbit.rockerType.X)
    ejey = joystickbit.getRockerValue(joystickbit.rockerType.Y)
    radio.sendValue("ex_joy", ejex)
    radio.sendValue("ey_joy", ejey)
    radio.sendValue("md_joy", mando)
    radio.sendValue("tc_CC", automata_C)
    radio.sendValue("tc_FF", automata_F)
    if (interrupcion == 0) {
        interrupcion = 1
    } else {
        interrupcion = 0
    }
    pins.digitalWritePin(DigitalPin.P12, interrupcion)
})
control.inBackground(function () {
    while (0 == 0) {
        if (mando == 0) {
            basic.showLeds(`
                . . # . .
                . . . . .
                # . . . #
                . . . . .
                . . # . .
                `)
        }
        if (mando == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
        }
        if (mando == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                `)
        }
        if (mando == 3) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        if (mando == 4) {
            basic.showLeds(`
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        if (mando == 5) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    }
})
