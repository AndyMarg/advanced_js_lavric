import * as serverApi from './db';

function parseResponse(response) {
    try {
        let info = JSON.parse(response);

        if (info.code === 200){
            return info.data;
        }
        else {
            throw new Error(info.data);
        }
    } catch(e) {
        throw new Error('Incorrect JSON');
    }
}

async function all(){
    let response = await serverApi.all();
    return parseResponse(response);
}

async function one(id){
    let response = await serverApi.get(id);
    return parseResponse(response);
}

async function remove(id){
    let response = await serverApi.remove(id);
    return parseResponse(response);
}

export {all, one, remove};