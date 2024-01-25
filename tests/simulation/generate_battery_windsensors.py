import json
import random

# Constants
no_of_objects = 24

max_voltage = 10
min_voltage = -10
max_current = 5
min_current = -5

min_speed = 0
max_speed = 25
min_direction = -2
max_direction = 2


def write_battery_json():
    battery_data = []

    for i in range(no_of_objects):
        battery_data.append(
            {
                "batteries": [
                    {
                        "voltage": random.randint(min_voltage, max_voltage),
                        "current": random.randint(min_current, min_current),
                    },
                    {
                        "voltage:": random.randint(min_voltage, max_voltage),
                        "current:": random.randint(min_current, min_current),
                    },
                ]
            }
        )

    with open("./tests/simulation/data/batteries.json", "w") as f:
        json.dump(battery_data, f, indent=4)


def write_wind_sensors_json():
    wind_sensors_data = []

    for i in range(no_of_objects):
        wind_sensors_data.append(
            {
                "windSensors": [
                    {
                        "speed": random.randint(min_speed, max_speed),
                        "direction": random.randint(min_direction, max_direction),
                    },
                    {
                        "speed": random.randint(min_speed, max_speed),
                        "direction": random.randint(min_direction, max_direction),
                    },
                ]
            }
        )

    with open("./tests/simulation/data/wind_sensors.json", "w") as f:
        json.dump(wind_sensors_data, f, indent=4)


def main():
    write_battery_json()
    write_wind_sensors_json()


if __name__ == "__main__":
    main()
