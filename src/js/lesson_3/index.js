// import * as BadApi from './api-callback';

// BadApi.userRegistration( (reg_info) => { 
//     console.log(reg_info) ;
//     BadApi.userAuthentication (reg_info.id, (auth_info) => {
//         console.log(auth_info);
//         BadApi.userData(auth_info.token, (data) => {
//             console.log(data);
//         }, (err) => {
//             console.error(err);
//         })
//     }, (err) => {
//         console.error(err);
//     })
// }, (err) => {
//     console.error(err);
// });

// *********************************************************
// import * as PromiseApi from './api-promise';

// PromiseApi.userRegistration()
//     .then((reg_info) => {
//         console.log(reg_info);
//         return PromiseApi.userAuthentication(reg_info.id);
//     })
//     .then((auth_info) => {
//         console.log(auth_info);
//         return PromiseApi.userData(auth_info.token)
//     })
//     .then((data_info) => {
//         console.log(data_info);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// *********************************************************
// import {asyncSequence} from './async-generator';
// import * as PromiseApi from './api-promise';

// function* userProcess() {
//     let reg_info = yield PromiseApi.userRegistration();
//     console.log(reg_info);
//     let auth_info = yield PromiseApi.userAuthentication(reg_info.id);
//     console.log(auth_info);
//     let data_info = yield PromiseApi.userData(auth_info.token);
//     console.log(data_info)
// }

// asyncSequence(userProcess());

// *********************************************************
import * as asyncApi from './api-async';

async function  userProcess() {
    let reg_info = await asyncApi.userRegistration();
    console.log(reg_info);
    let auth_info = await asyncApi.userAuthentication(reg_info.id);
    console.log(auth_info);
    let data_info = await asyncApi.userData(auth_info.token);
    console.log(data_info);
    return data_info.data;
}

userProcess().then((data) => {
    console.log(data);
})
.catch((err) => {
    console.error(err.message);
})