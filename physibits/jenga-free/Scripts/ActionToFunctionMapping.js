ActionToFunctionMapping = {
    "PluginName": "JengaPlugin.js",
    "ActionMappings": [
        {
            "Source": "Input.Processed.Efficio",
            "Topic": "ZeroFingersExtended",
            "Action": "ClearPointer"
        }, 
        {
            "Source": "Input.Processed.Efficio",
            "Topic": "OneFingersExtended",
            "Action": "Point",
            "Arguments": [
                {
                    "Source": "Gesture",
                    "Name": "frame",
                    "MapTo": "Frame"
                },
                {
                    "Source": "Gesture",
                    "Name": "extendedFingers",
                    "MapTo": "PointedFingers"
                }
            ],
        }, 
        {
            "Source": "Input.Processed.Efficio",
            "Topic": "TwoFingersExtended",
            "Action": "TwoFingerPoint",
            "Arguments": [
                {
                    "Source": "Gesture",
                    "Name": "frame",
                    "MapTo": "Frame"
                },
                {
                    "Source": "Gesture",
                    "Name": "extendedFingers",
                    "MapTo": "PointedFingers"
                }
            ],
        },
        {
            "Source": "Input.Audio.Raw",
            "Topic": "Sound",
            "Action": "Reset",
            "Arguments": [
                {
                    "Source": "Gesture",
                    "Name": "message",
                    "MapTo": "message"
                }
            ]
        }
    ]
}