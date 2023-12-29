#![no_std]
#![no_main]

use arduino_hal::prelude::*;
use panic_halt as _;
use embedded_hal::serial::Read;

const MAX_BUFFER_SIZE: usize = 64;

#[arduino_hal::entry]
fn main() -> ! {
    let dp = arduino_hal::Peripherals::take().unwrap();
    let pins = arduino_hal::pins!(dp);
    let mut serial = arduino_hal::default_serial!(dp, pins, 9600);

    let mut buff = [0_u8; MAX_BUFFER_SIZE];
    let mut buff_idx: usize = 0;

    loop {
        // Read a byte from the serial connection
        let b = nb::block!(serial.read()).void_unwrap();

        if b != 0 {
            if b == 10 {
                // print
                if buff_idx > 5 && buff.clone()[0] == 36 {
                    ufmt::uwrite!(&mut serial, "\n").void_unwrap();
                    ufmt::uwrite!(&mut serial, "GPS PACKET => [").void_unwrap();
                    for x in buff {
                        ufmt::uwrite!(&mut serial, "{}, ", x).void_unwrap();
                    }
                    ufmt::uwrite!(&mut serial, "]").void_unwrap();
                }
                buff = [0_u8; MAX_BUFFER_SIZE];
                buff_idx = 0;
            } else {
                buff[buff_idx] = b;
                buff_idx += 1;
            }
        }
    }
}