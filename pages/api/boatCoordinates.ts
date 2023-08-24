import clientPromise from "@/lib/mongodb"
import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
    try {
        // ** Uncomment once we create a collection for boat coordinates in MongoDB **
        // const client = await clientPromise;
        // // TODO: Change the DB name
        // const db = client.db("<DB_NAME>");

        // // TODO: Change the collection name
        // const boatCoordinates = await db
        //     .collection("<COLLECTION_NAME>")
        //     .find({})
        //     .toArray();

        // res.json(boatCoordinates);

        // Remove this dummy data once the collection above is created. 
        res.json([{lat: 49.37614179786771, lng: -123.27376619978901}]);
    } catch (e) {
        console.error(e);
    }
}
