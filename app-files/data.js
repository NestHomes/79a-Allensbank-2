var APP_DATA = {
  "scenes": [
    {
      "id": "0-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.4072897623413336,
        "pitch": 0.09635989842782777,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0.7694434722118562,
          "pitch": 0.325468039396986,
          "rotation": 0,
          "target": "1-bathroom"
        },
        {
          "yaw": 3.0546067588835086,
          "pitch": 0.3049869616493197,
          "rotation": 0,
          "target": "2-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.005006415277542,
        "pitch": 0.0636609081876145,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 2.958346531415108,
          "pitch": 0.052501345079750905,
          "rotation": 0,
          "target": "0-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3055721937914324,
        "pitch": 0.08058189696646245,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -2.451501695125325,
          "pitch": 0.2092465097889118,
          "rotation": 0,
          "target": "0-hallway"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
