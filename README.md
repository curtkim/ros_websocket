## 개요
lgsvlsimulator(https://www.lgsvlsimulator.com/)가 보내는 ros bridge(websocket) message를 capture

## Sensor config

        [
        {
            "type": "GPS Device",
            "name": "GPS",
            "params": {
            "Frequency": 12.5,
            "Topic": "/nmea_sentence",
            "Frame": "gps",
            "IgnoreMapOrigin": true
            },
            "transform": {
            "x": 0,
            "y": 0,
            "z": 0,
            "pitch": 0,
            "yaw": 0,
            "roll": 0
            }
        },
        {
            "type": "GPS Odometry",
            "name": "GPS Odometry",
            "params": {
            "Frequency": 12.5,
            "Topic": "/odom",
            "Frame": "gps",
            "IgnoreMapOrigin": true
            },
            "transform": {
            "x": 0,
            "y": 0,
            "z": 0,
            "pitch": 0,
            "yaw": 0,
            "roll": 0
            }
        },
        {
            "type": "IMU",
            "name": "IMU",
            "params": {
            "Topic": "/imu_raw",
            "Frame": "imu"
            },
            "transform": {
            "x": 0,
            "y": 0,
            "z": 0,
            "pitch": 0,
            "yaw": 0,
            "roll": 0
            }
        },
        {
            "type": "Lidar",
            "name": "Lidar",
            "params": {
            "LaserCount": 32,
            "MinDistance": 0.5,
            "MaxDistance": 100,
            "RotationFrequency": 10,
            "MeasurementsPerRotation": 360,
            "FieldOfView": 41.33,
            "CenterAngle": 10,
            "Compensated": true,
            "PointColor": "#ff000000",
            "Topic": "/points_raw",
            "Frame": "velodyne"
            },
            "transform": {
            "x": 0,
            "y": 2.312,
            "z": -0.3679201,
            "pitch": 0,
            "yaw": 0,
            "roll": 0
            }
        },
        {
            "type": "Color Camera",
            "name": "Main Camera",
            "params": {
            "Width": 1920,
            "Height": 1080,
            "Frequency": 15,
            "JpegQuality": 75,
            "FieldOfView": 50,
            "MinDistance": 0.1,
            "MaxDistance": 1000,
            "Topic": "/image_compressed",
            "Frame": "camera"
            },
            "transform": {
            "x": 0,
            "y": 1.7,
            "z": -0.2,
            "pitch": 0,
            "yaw": 0,
            "roll": 0
            }
        },
        {
            "type": "Manual Control",
            "name": "Manual Car Control"
        },
        {
            "type": "Vehicle Control",
            "name": "Autoware Car Control",
            "params": {
            "Topic": "/vehicle_cmd"
            }
        }
        ]

## result
- [GPS Device](nmea_sentence/0.json)
- [GPS Odometry](odom/0.json)
- [IMU](imu_raw/0.json)
- [Lidar](points_raw/0.json)
- [Color Camera](image_compressed/125.json)
