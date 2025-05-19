import {faker} from '@faker-js/faker';

function createData() {
    return {
        name: faker.person.fullName(),
        org: faker.company.name(),
        status: faker.helpers.arrayElement(['On track','Behind']),
        challenge: "Challenge" + faker.number.int({max:5}).toString(),
        reflectionQuality: faker.number.int({max:5}),
        date: faker.date.recent(),
        cohort: faker.number.int({max:10})
    }
}

let activityArr = [];

function initData() {
    for(var i = 0; i<300; i++){
        activityArr.push(createData());
    }
    console.log(activityArr);
    console.log(activityArr.length)
}

initData();

