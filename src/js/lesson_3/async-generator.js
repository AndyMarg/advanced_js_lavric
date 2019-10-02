export function asyncSequence(generator, prevValue) {
    let current = generator.next(prevValue);

    if (!current.done) {
        current.value.then((result) => {
            asyncSequence(generator, result)
        })
        .catch((err) => {
            generator.throw(err);
        })
    }
}