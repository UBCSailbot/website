import { expect } from 'chai';
import { api } from '../shared/classes/api';
import { Given, Then } from "@cucumber/cucumber";
import GPS from '@/models/GPS';
import ConnectMongoDB from '@/lib/mongodb';
import AISShips from '@/models/AISShips';
import GlobalPath from '@/models/GlobalPath';

Given('I clear the database', async function () {
    const db = await ConnectMongoDB();
    await GPS.deleteMany();
    await AISShips.deleteMany();
    await GlobalPath.deleteMany();
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
    const aisshipData = {
        ships: [
          {
            id: 1,
            latitude: 12.3323,
            longitude: 40.2313,
            speed: 24,
            heading: 42,
          },
          {
            id: 2,
            latitude: 13.4456,
            longitude: 41.1122,
            speed: 18,
            heading: 120,
          },
          {
            id: 3,
            latitude: 11.7890,
            longitude: 39.5678,
            speed: 30,
            heading: 275,
          },
        ],
      };
    await AISShips.create(aisshipData);
});

Given('I insert GlobalPath data into the database', async function () {
    const globalPathData = {
        waypoints: [
            {
                latitude: 49.335473,
                longitude: -123.335702
            },
            {
                latitude: 49.32865,
                longitude: -123.358187
            },
            {
                latitude: 49.321690,
                longitude: -123.400929
            },
        ],
    };
    await GlobalPath.create(globalPathData);
});

Then('the response data matches the data in the database', async function () {

    let apiResponseData_GPS;
    let databaseData_GPS;

    databaseData_GPS = await GPS.find({}).then(function(gps) {
        let transformedGPS = gps.map((data) => data.toJSON())
        return transformedGPS;
    });

    apiResponseData_GPS = api.response.data.data[0];

    const propertiesToCompare = Object.keys(apiResponseData_GPS);

    for (const property of propertiesToCompare) {
        expect(apiResponseData_GPS[property]).to.equal(databaseData_GPS[0][property], `Data in the response does not match data in the database for property: ${property}`);
    }
});

Then('the response data matches the aisship data in the database', async function () {

    let apiResponseData_AISShips;
    let databaseData_AISShips;

    databaseData_AISShips = await AISShips.find({}).then(function(aisships) {
        let transformedAISShips = aisships.map((data) => data.toJSON())
        return transformedAISShips;
    });

    for (let i = 0; i < 3; i++) {

        apiResponseData_AISShips = api.response.data.data[0].ships[i];

        const propertiesToCompare = Object.keys(apiResponseData_AISShips);

        for (const property of propertiesToCompare) {
            expect(apiResponseData_AISShips[property]).to.equal(databaseData_AISShips[0].ships[i][property], `Data in the response does not match data in the database for property: ${property}`);
        }
    }
});

Then('the response data matches the GlobalPath data in the database', async function () {

    let apiResponseData_GlobalPath;
    let databaseData_GlobalPath;

    databaseData_GlobalPath = await GlobalPath.find({}).then(function(globalpath){
        let transformedGlobalPath = globalpath.map((data) => data.toJSON())
        return transformedGlobalPath;
    });

    for (let i = 0; i < 3; i++) {

        apiResponseData_GlobalPath = api.response.data.data[0].waypoints[i];

        const propertiesToCompare = Object.keys(apiResponseData_GlobalPath);

        for (const property of propertiesToCompare) {
            expect(apiResponseData_GlobalPath[property]).to.equal(databaseData_GlobalPath[0].waypoints[i][property], `Data in the response does not match data in the database for property: ${property}`);
        }
    }
})
