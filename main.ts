/**
 * Provides access to basic micro:bit functionality.
 */
//% color=190 weight=100 icon="\uf1ec" block="Basic Blocks"
//% groups=['LED matrix', 'Control flow', 'others']
namespace basic {
    //% block
export function showMilo(v: number, interval: number = 150): void
{

 }
}
basic.forever(function () {
    servos.P0.setAngle(90)
    basic.showNumber(0)
})
