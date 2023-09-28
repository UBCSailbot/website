import { Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { api } from '../shared/classes/api';

Then('the service response is {int}', async function (status: number) {
    expect(api.response.status).to.eq(status, 'Response status is not as expected')
    console.log(api.error.response);
})

Then('the service error response is {int}', async function (status: number) {
    expect(api.error.response.status).to.equal(status, 'Error status is not as expected')
    console.log(api.error.response);
})

Then('the service success response is {int}', async function (status: number) {
    expect(api.response.status).to.equal(status, 'Success status is as expected')
    console.log(api.response);
})

export {}

// api.response.data to check data
// console.log(api.response)
