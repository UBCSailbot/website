import { expect } from 'chai';
import { api } from '../shared/classes/api';
import { Given, Then } from "@cucumber/cucumber";
import GPS from '@/models/GPS';
import ConnectMongoDB from '@/lib/mongodb';

let apiResponseData;
let databaseData;

Given('I clear the database', async function () {
    const db = await ConnectMongoDB();
    await GPS.deleteMany();
});

Given('I insert GPS data into the database', async function () {
    const gpsData = {
        latitude: 49.2243,
        longitude: 4.5552,
        speed: 30,
        heading: 45,
    };

    await GPS.create(gpsData);
});

Then('the response data matches the data in the database', async function () {
    databaseData = await GPS.find({}).then(function(gps) {
        let transformedGPS = gps.map((data) => data.toJSON())
        return transformedGPS;
    });

    apiResponseData = api.response.data.data[0];
    expect(apiResponseData.latitude).to.equal(databaseData[0].latitude, 'Data in the response does not match data in the database');
    expect(apiResponseData.longitude).to.equal(databaseData[0].longitude, 'Data in the response does not match data in the database');
    expect(apiResponseData.speed).to.equal(databaseData[0].speed, 'Data in the response does not match data in the database');
    expect(apiResponseData.heading).to.equal(databaseData[0].heading, 'Data in the response does not match data in the database');
});
