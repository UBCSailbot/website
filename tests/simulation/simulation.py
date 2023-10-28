import pymongo
import json
import time

# Function to read data from a JSON file
def read_json_file(file_name):
    with open(file_name, 'r') as file:
        data = json.load(file)
    return data

# Function to periodically write data to MongoDB
def write_to_mongodb(data, collection):
    collection.insert_one(data)
    print("Data written to MongoDB")

# Replace these values with your MongoDB connection string and database/collection names
connection_string = "mongodb://localhost:27017"  # Replace with your MongoDB connection string
database_name = "TestDB"
client = pymongo.MongoClient(connection_string)
db = client[database_name]

# Replace 'data.json' with the name of your JSON file
json_file_name = 'data.json'
gpsData = read_json_file("./data/gps.json")
localPathData = read_json_file("./data/localpath.json")
globalPathData = read_json_file("./data/globalpath.json")
aisShipsData = read_json_file("./data/aisships.json")

GPS = db["gps"]
LocalPath = db["localpaths"]
GlobalPath = db["globalpaths"]
AISShips = db["aisships"]

def preload_data():
    write_to_mongodb(globalPathData[0], GlobalPath)
    write_to_mongodb(localPathData[0], LocalPath)
    write_to_mongodb(aisShipsData[0], AISShips)

while True:
    user_input = input("Enter 'PRELOAD/START/CLEAR/EXIT: ")

    if user_input.upper() == "PRELOAD":
        print("\nPreloading Data...\n")
        preload_data()  # Call the function to preload data
    elif user_input.upper() == "CLEAR":
        print("\nClearing all collections:\n")
        GPS.delete_many({})
        print("...Cleared GPS")
        LocalPath.delete_many({})
        print("...Cleared LocalPath")
        GlobalPath.delete_many({})
        print("...Cleared GlobalPath")
        AISShips.delete_many({})
        print("...Cleared AISShips")
        print("\nCleared all collections\n")
    elif user_input.upper() == "START":
        j = 0
        for i in range(1, len(gpsData)):
            # Write data to MongoDB
            write_to_mongodb(gpsData[i], GPS)
            if localPathData[j]['waypoints'][1]['latitude'] == gpsData[i]['latitude'] and localPathData[j]['waypoints'][1]['longitude'] == gpsData[i]['longitude']:
                time.sleep(1)
                j += 1
                write_to_mongodb(localPathData[j], LocalPath)
            # Adjust the time interval as needed (currently set to 60 seconds)
            time.sleep(1)  # Sleep for 60 seconds before writing again
    elif user_input.upper() == "EXIT":
        break
    else:
        print("Invalid input.")

print("\nDONE.")
