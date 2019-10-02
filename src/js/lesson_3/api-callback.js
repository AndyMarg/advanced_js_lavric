const INTERVAL = 500;
const ERROR_PROBABILITY = 0.2;

function userRegistration(onSuccess, onError) {
    setTimeout(() => {
        if (Math.random() > ERROR_PROBABILITY) {
            onSuccess({
                message: '+ registration',
                id: 1
            })
        } else {
            onError({ msg: 'Error in registration'})
        }
    }, INTERVAL)
}

function userAuthentication(id, onSuccess, onError) {
    setTimeout(() => {
        if (Math.random() > ERROR_PROBABILITY) {
            onSuccess({
                message: `+ aithentication (id=${id})`,
                token: '1234567890-0987654321'
            })
        } else {
            onError({ msg: 'Error in athentication'})
        }
    }, INTERVAL)
}

function userData(token, onSuccess, onError) {
    setTimeout(() => {
        if (Math.random() > ERROR_PROBABILITY) {
            onSuccess({
                message: `data by token (token=${token})`,
                data: {
                    id: 1,
                    name: 'John Smith'
                }
            })
        } else {
            onError({ msg: 'Error in user data'})
        }
    }, INTERVAL)
}

export {userRegistration, userAuthentication, userData};