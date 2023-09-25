import { expect } from 'chai';
import { api } from '../shared/classes/api';
import { Given } from "@cucumber/cucumber";
import { GPS } from '../shared/endpoints'
import { ConnectMongoDB } from '../../lib/mongodb';

Given('I insert GPS data into the database', async function () {
  const db = await ConnectMongoDB();
  const gpsData = {
    latitude: 49.2243,
    longitude: 4.5552,
    speed: 30,
    heading: 45,
  };
  await db.close();
});
