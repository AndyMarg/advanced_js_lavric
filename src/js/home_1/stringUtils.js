 function wordsCount(str) {
    str = str.replace(/\s+/g, ' ').trim();
    let count = 0, pos = 0;

    while ((pos = str.indexOf(' ', ++pos)) != -1) 
        count++;
    return count;
}

function* getWords(str) {
    str = str.replace(/\s+/g, ' ').trim();
    let start = 0, pos = 0;

    while ((pos = str.indexOf(' ', pos)) != -1) {
        yield str.substring(start, pos);
        start = ++pos;
    }
}

export {wordsCount, getWords};