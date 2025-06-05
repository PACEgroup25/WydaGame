import { Client } from "$lib/data/buildClient"

export async  function roleChange(role: string) {

    if (role === 'Learner') location.href = '/learner/dashboard';
    else if (role === 'Learning Coach') location.href = '/learning-coach';
    else if (role === 'Client Admin') location.href = '/client-admin';

//     const newClient = new Client(role)
//     await newClient.declareClient();
}