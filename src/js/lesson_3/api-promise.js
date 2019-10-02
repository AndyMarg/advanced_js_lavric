import { Promise } from "q";

const INTERVAL = 500;
const ERROR_PROBABILITY = 0.2;

function TimeoutPromise(period) {
    return new Promise(function (resolve) {
        setTimeout(resolve, period);
    })
}

function userRegistration() {
    return new Promise(function (resolve, reject) {
        TimeoutPromise(INTERVAL).then(() => {
            if (Math.random() > ERROR_PROBABILITY) {
                resolve({
                    message: '+ registration',
                    id: 1
                })
            } else {
                reject({ msg: 'Error in registration'})
            }
        })
    })
}

function userAuthentication(id) {
    return new Promise(function (resolve, reject) {
        TimeoutPromise(INTERVAL).then(() => {
            if (Math.random() > ERROR_PROBABILITY) {
                resolve({
                    message: `+ aithentication (id=${id})`,
                    token: '1234567890-0987654321'
                })
            } else {
                reject({ msg: 'Error in athentication'})
            }
        })
    })
}

function userData(token) {
    return new Promise(function (resolve, reject) {
        TimeoutPromise(INTERVAL).then(() => {
            if (Math.random() > ERROR_PROBABILITY) {
                resolve({
                    message: `data by token (token=${token})`,
                    data: {
                        id: 1,
                        name: 'John Smith'
                    }
                })
            } else {
                reject({ msg: 'Error in user data'})
            }
        })
    })
}

export {userRegistration, userAuthentication, userData};