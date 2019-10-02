import { Promise } from "q";

const INTERVAL = 500;
const ERROR_PROBABILITY = 0.2;

function TimeoutPromise(period) {
    return new Promise(function (resolve) {
        setTimeout(resolve, period);
    })
}

async function userRegistration() {
    return TimeoutPromise(INTERVAL).then(() => {
        if (Math.random() > ERROR_PROBABILITY) {
            return ({
                message: '+ registration',
                id: 1
            });
        } else {
            throw new Error('Error in registration');
        }
    })
}

async function userAuthentication(id) {
    return TimeoutPromise(INTERVAL).then(() => {
        if (Math.random() > ERROR_PROBABILITY) {
            return ({
                message: `+ aithentication (id=${id})`,
                token: '1234567890-0987654321'
            });
        } else {
            throw new Error('Error in athentication');
        }
    })
}

async function userData(token) {
    return TimeoutPromise(INTERVAL).then(() => {
        if (Math.random() > ERROR_PROBABILITY) {
            return ({
                message: `data by token (token=${token})`,
                data: {
                    id: 1,
                    name: 'John Smith'
                }
            });
        } else {
            throw new Error('Error in user data');
        }
    })
}

export {userRegistration, userAuthentication, userData};