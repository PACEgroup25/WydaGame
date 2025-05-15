import mysql from 'mysql2/promise';
import {HOST} from '$env/static/private';

const config = {
    host:HOST,
}

export function load(){
    console.debug("test");
    return {
        info: "testdata"
    }
}

function fetch(){


    let conn = mysql.createConnection(config);
}