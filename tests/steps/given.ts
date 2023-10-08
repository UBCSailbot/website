import { expect } from 'chai';
import { api } from '../shared/classes/api';
import { Given, Then } from "@cucumber/cucumber";
import GPS from '@/models/GPS';
import ConnectMongoDB from '@/lib/mongodb';
import AISShips from '@/models/AISShips';

let apiResponseData_GPS;
let databaseData_GPS;
let apiResponseData_AISShips;
let databaseData_AISShips;

Given('I clear the database', async function () {
    const db = await ConnectMongoDB();
    await GPS.deleteMany();
});

Given('I clear the DB', async function () {
    const db = await ConnectMongoDB();
    await AISShips.deleteMany();
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

Given('I insert AISShips data into the database', async function () {
    const aisshipData = {ships: [
        {
            id: 1,
            latitude: 12.3323,
            longitude: 40.2313,
            speed: 24,
            heading: 42,
        }
    ]};
    await AISShips.create(aisshipData);
});

Then('the response data matches the data in the database', async function () {
    databaseData_GPS = await GPS.find({}).then(function(gps) {
        let transformedGPS = gps.map((data) => data.toJSON())
        return transformedGPS;
    });

    apiResponseData_GPS = api.response.data.data[0];

    const propertiesToCompare = ['latitude', 'longitude', 'speed', 'heading'];

    for (const property of propertiesToCompare) {
        expect(apiResponseData_GPS.property).to.equal(databaseData_GPS[0].property, `Data in the response does not match data in the database for property: ${property}`);
    }

});

Then('the response data matches the aisship data in the database', async function () {

    databaseData_AISShips = await AISShips.find({}).then(function(aisships) {
        let transformedAISShips = aisships.map((data) => data.toJSON())
        return transformedAISShips;
    });

    apiResponseData_AISShips = api.response.data.data[0].ships[0];

    const propertiesToCompare = ['id', 'latitude', 'longitude', 'speed', 'heading'];

    for (const property of propertiesToCompare) {
        expect(apiResponseData_AISShips.property).to.equal(databaseData_AISShips.property, `Data in the response does not match data in the database for property: ${property}`);
    }

});
