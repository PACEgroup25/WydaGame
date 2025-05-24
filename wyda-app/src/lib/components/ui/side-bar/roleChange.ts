import { buildClient } from "$lib/data/buildProfile"

export function roleChange(role: string) {

    if (role === 'Learner') location.href = '/learner';
    else if (role === 'Learning Coach') location.href = '/learning-coach';
    else if (role === 'Client Admin') location.href = '/client-admin';

    buildClient(role);
}