import { When, Then } from "@cucumber/cucumber";
import { api } from '../shared/classes/api';
import { GPS } from '../shared/endpoints'
import AISShips from '@/models/AISShips';

When("I get all GPS interface data", async function () {
  this.lastResponse = await api.get(GPS, this.config)
});

When("I try to get all GPS interface data", async function () {
  this.lastResponse = await api.get(GPS, this.config, false)
});

When("I get all AISShip interface data", async function () {
  this.lastResponse = await api.get(AISShips, this.config, false)
});

export {}
