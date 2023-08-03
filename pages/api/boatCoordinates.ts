import clientPromise from "@/lib/mongodb"
import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
    try {
        const client = await clientPromise;
        // TODO: Change the DB name
        const db = client.db("<DB_NAME>");

        // TODO: Change the collection name 
        const boatCoordinates = await db
            .collection("<COLLECTION_NAME>")
            .find({})
            .toArray();

        res.json(boatCoordinates);
    } catch (e) {
        console.error(e);
    }
}
