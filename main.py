"""

Estado autómata cuatro

"""
"""

Estado autómata cinco

"""
def AutomataTecla(estado: number, tecla: number):
    if estado == 0:
        if tecla == 0:
            estado = 0
        else:
            estado = 1
    elif estado == 1:
        if tecla == 0:
            estado = 0
        else:
            estado = 2
    else:
        if estado == 2:
            if tecla == 0:
                estado = 0
            else:
                estado = 1
    return estado
ejey = 0
ejex = 0
mando = 0
automata_B = 0
automata_A = 0
automata_F = 0
automata_E = 0
automata_D = 0
automata_C = 0
pulsado = 0
estado2 = 0
radio.set_group(10)
joystickbit.init_joystick_bit()
"""

Estado autómata cero, descanso

"""
"""

Estado autómata uno.

"""
"""

Estado autómata dos

"""
"""

Estado autómata tres

"""

def on_forever():
    global pulsado, automata_C, automata_D, automata_E, automata_F, automata_A, automata_B, mando, ejex, ejey
    if joystickbit.get_button(joystickbit.JoystickBitPin.P12):
        pulsado = 1
    else:
        pulsado = 0
    automata_C = AutomataTecla(automata_C, pulsado)
    if joystickbit.get_button(joystickbit.JoystickBitPin.P13):
        pulsado = 1
    else:
        pulsado = 0
    automata_D = AutomataTecla(automata_D, pulsado)
    if joystickbit.get_button(joystickbit.JoystickBitPin.P14):
        pulsado = 1
    else:
        pulsado = 0
    automata_E = AutomataTecla(automata_E, pulsado)
    if joystickbit.get_button(joystickbit.JoystickBitPin.P15):
        pulsado = 1
    else:
        pulsado = 0
    automata_F = AutomataTecla(automata_F, pulsado)
    if input.button_is_pressed(Button.A):
        pulsado = 1
    else:
        pulsado = 0
    automata_A = AutomataTecla(automata_A, pulsado)
    if input.button_is_pressed(Button.B):
        pulsado = 1
    else:
        pulsado = 0
    automata_B = AutomataTecla(automata_B, pulsado)
    if mando == 0:
        if automata_B == 1:
            mando = 1
    elif mando == 1:
        if automata_D == 1:
            mando = 2
        if automata_E == 1:
            mando = 0
        if automata_A == 1:
            mando = 0
    elif mando == 2:
        if automata_D == 1:
            mando = 3
        if automata_E == 1:
            mando = 1
        if automata_A == 1:
            mando = 0
    elif mando == 3:
        if automata_D == 1:
            mando = 4
        if automata_E == 1:
            mando = 2
        if automata_A == 1:
            mando = 0
    elif mando == 4:
        if automata_D == 1:
            mando = 5
        if automata_E == 1:
            mando = 3
        if automata_A == 1:
            mando = 0
    elif mando == 5:
        if automata_D == 1:
            mando = 5
        if automata_E == 1:
            mando = 4
        if automata_A == 1:
            mando = 0
    else:
        mando = 0
    ejex = joystickbit.get_rocker_value(joystickbit.rockerType.X)
    ejey = joystickbit.get_rocker_value(joystickbit.rockerType.Y)
    radio.send_value("ex_joy", ejex)
    radio.send_value("ey_joy", ejey)
    radio.send_value("md_joy", mando)
basic.forever(on_forever)

def on_in_background():
    while 0 == 0:
        if mando == 0:
            basic.show_leds("""
                . . # . .
                                . . . . .
                                # . . . #
                                . . . . .
                                . . # . .
            """)
        if mando == 1:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                # # # # #
            """)
        if mando == 2:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . . . .
                                # # # # #
                                # # # # #
            """)
        if mando == 3:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                # # # # #
                                # # # # #
                                # # # # #
            """)
        if mando == 4:
            basic.show_leds("""
                . . . . .
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
            """)
        if mando == 5:
            basic.show_leds("""
                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
            """)
control.in_background(on_in_background)
