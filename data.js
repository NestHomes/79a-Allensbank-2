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
        "yaw": 0.7426179940856379,
        "pitch": 0.1461718131019527,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -2.451501695125325,
          "pitch": 0.2092465097889118,
          "rotation": 0,
          "target": "0-hallway"
        },
        {
          "yaw": -0.28313450373627624,
          "pitch": 0.4492914345204895,
          "rotation": 0,
          "target": "3-living-room-2"
        },
        {
          "yaw": 1.1791907778096977,
          "pitch": 0.5538245606975707,
          "rotation": 0,
          "target": "4-communal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room-2",
      "name": "Living Room 2",
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
        "yaw": -1.983386678758574,
        "pitch": 0.01302537510438384,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 3.0358516176903265,
          "pitch": 0.2761153721219216,
          "rotation": 0,
          "target": "2-living-room"
        },
        {
          "yaw": 2.24943268412178,
          "pitch": 0.4591368485309548,
          "rotation": 0,
          "target": "4-communal"
        },
        {
          "yaw": -0.264995693967192,
          "pitch": 0.1280308964779131,
          "rotation": 0,
          "target": "5-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-communal",
      "name": "Communal",
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
        "yaw": -0.14096926492222828,
        "pitch": 0.09369988019355979,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0.10974803622439033,
          "pitch": 0.3398595428822393,
          "rotation": 0,
          "target": "3-living-room-2"
        },
        {
          "yaw": -0.5027837598572109,
          "pitch": 0.4637537931013469,
          "rotation": 0,
          "target": "2-living-room"
        },
        {
          "yaw": -2.9350175376176484,
          "pitch": 0.164678236014705,
          "rotation": 0,
          "target": "6-communal-into-rooms"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen",
      "name": "Kitchen",
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
        "yaw": -1.0328042265332211,
        "pitch": 0.04125643332471185,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 2.052438227060807,
          "pitch": 0.12196692702796419,
          "rotation": 0,
          "target": "3-living-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-communal-into-rooms",
      "name": "Communal into rooms",
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
        "yaw": -0.47660757585878955,
        "pitch": 0.14429781549808496,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.4117529906375861,
          "pitch": 0.3642244913727932,
          "rotation": 0,
          "target": "4-communal"
        },
        {
          "yaw": -2.775925277226129,
          "pitch": 0.4348415189937569,
          "rotation": 0,
          "target": "7-bedroom-2"
        },
        {
          "yaw": -1.759146832898125,
          "pitch": 0.5420858929357166,
          "rotation": 0,
          "target": "9-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-2",
      "name": "Bedroom 2",
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
        "yaw": 2.7905927902739105,
        "pitch": 0.1610329991505477,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0.4382977000456165,
          "pitch": 0.7159754614623548,
          "rotation": 0,
          "target": "6-communal-into-rooms"
        },
        {
          "yaw": -0.3237795840627449,
          "pitch": 0.6079912777267875,
          "rotation": 0,
          "target": "9-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-internal-bedroom-2",
      "name": "Internal Bedroom 2",
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
        "yaw": 2.0488892810023733,
        "pitch": -0.00005534418144748088,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.5701565564008781,
          "pitch": 0.42822801013240586,
          "rotation": 0,
          "target": "7-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-1",
      "name": "Bedroom 1",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.964539612821121,
          "pitch": 0.06938534989880019,
          "rotation": 0,
          "target": "10-internal-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-internal-bedroom-1",
      "name": "Internal Bedroom 1",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.619941418177465,
          "pitch": 0.2060121057429498,
          "rotation": 0,
          "target": "9-bedroom-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
