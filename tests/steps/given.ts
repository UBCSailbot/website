import { expect } from 'chai';
import { api } from '../shared/classes/api';
import { Given, Then } from "@cucumber/cucumber";
import GPS from '@/models/GPS';
import ConnectMongoDB from '@/lib/mongodb';
import AISShips from '@/models/AISShips';
import GlobalPath from '@/models/GlobalPath';
import LocalPath from '@/models/LocalPath';

Given('I clear the database', async function () {
    const db = await ConnectMongoDB();
    await GPS.deleteMany();
    await AISShips.deleteMany();
    await GlobalPath.deleteMany();
    await LocalPath.deleteMany();
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
                id: 0,
                latitude: 49.3481,
                longitude: -123.6096,
                speed: 10,
                heading: 275
            },
            {
                id: 1,
                latitude: 49.4567,
                longitude: -123.3729,
                speed: 15,
                heading: 280
            },
            {
                id: 2,
                latitude: 49.1728,
                longitude: -123.4578,
                speed: 20,
                heading: 285
            }
        ]
    };
    await AISShips.create(aisshipData);
});

Given('I insert GlobalPath data into the database', async function () {
    const globalPathData = {
        waypoints: [
            {
                latitude:  49.37614179786771,
                longitude: -123.27376619978901
            },
            {
                latitude: 49.37711663428484,
                longitude: -123.27156381625609
            },
            {
                latitude: 49.378315644557176,
                longitude: -123.27180418927239
            },
            {
                latitude: 49.381465588831524,
                longitude: -123.27254420646906
            },
            {
                latitude: 49.3839035958063,
                longitude: -123.2730793585836
            },
            {
                latitude: 49.38650818896502,
                longitude: -123.27564156703514
            },
            {
                latitude: 49.38625857180026,
                longitude: -123.28177300276381
            },
            {
                latitude: 49.382587584844835,
                longitude:-123.29247537578034
            },
            {
                latitude: 49.37750287441669,
                longitude: -123.29684958339224
            },
            {
                latitude: 49.37046373776872,
                longitude: -123.3022011892728
            },
            {
                latitude: 49.362482757047864,
                longitude: -123.30864508742094
            },
            {
                latitude: 49.35300923158242,
                longitude: -123.31705995027019
            },
            {
                latitude: 49.34650411159584,
                longitude: -123.3237483126415
            },
            {
                latitude: 49.34356040541922,
                longitude: -123.34073692035749
            },
            {
                latitude: 49.342421649614984,
                longitude: -123.34839354509414
            },
            {
                latitude: 49.34175775635472,
                longitude: -123.35453636335373
            },
        ],
    };
    await GlobalPath.create(globalPathData);
});

Given('I insert LocalPath data into the database', async function () {
    const localPathData = {
        waypoints: [
            {
                latitude: 49.34356040541922,
                longitude: -123.34073692035749
            },
            {
                latitude: 49.342421649614984,
                longitude: -123.34839354509414
            },
            {
                latitude: 49.34175775635472,
                longitude: -123.35453636335373
            },
        ]
    };
    await LocalPath.create(localPathData);
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

    for (let i = 0; i < 16; i++) {

        apiResponseData_GlobalPath = api.response.data.data[0].waypoints[i];

        const propertiesToCompare = Object.keys(apiResponseData_GlobalPath);

        for (const property of propertiesToCompare) {
            expect(apiResponseData_GlobalPath[property]).to.equal(databaseData_GlobalPath[0].waypoints[i][property], `Data in the response does not match data in the database for property: ${property}`);
        }
    }
})

Then('the response data matches the LocalPath data in the database', async function () {

    let apiResponseData_LocalPath;
    let databaseData_LocalPath;

    databaseData_LocalPath = await LocalPath.find({}).then(function(localpath){
        let transformedLocalPath = localpath.map((data) => data.toJSON())
        return transformedLocalPath;
    });

    for (let i = 0; i < 3; i++) {

        apiResponseData_LocalPath = api.response.data.data[0].waypoints[i];

        const propertiesToCompare = Object.keys(apiResponseData_LocalPath);

        for (const property of propertiesToCompare) {
            expect(apiResponseData_LocalPath[property]).to.equal(databaseData_LocalPath[0].waypoints[i][property], `Data in the response does not match data in the database for property: ${property}`);
        }
    }
})
