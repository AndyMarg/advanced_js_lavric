export default function* genDigitRang(num) {
    const PERIOD = 10;
    let delimiter = PERIOD;    

    while (num % delimiter != num) {
        yield parseInt((num % delimiter) / (delimiter / PERIOD));
        delimiter *= PERIOD;
    }
    yield  parseInt((num % delimiter) / (delimiter / PERIOD));
}