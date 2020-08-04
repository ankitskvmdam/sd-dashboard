import ElieVideo from "./sd_mask/elie.mp4";
import  JeffVideo from "./sd_mask/jeff.mp4";
import  JohnVideo from "./sd_mask/john.mp4";
import  MarthVideo from "./sd_mask/martha.mp4";

export default [
  {
    "Name": "Elie",
    "Empid": 10011,
    "Visitorid": "na",
    "cluster/location": "location1",
    "voilation score": 2,
    "voilation density": 0.2,
    "mask": "yes",
    "video": ElieVideo, 
    "graph": {
      labels: [
        '12-07-20',
        '14-07-20',
        '15-07-20',
        '16-07-20',
        '24-07-20'
      ],
      datasets: [
        {
          data: [
            0.29,
            0.13,
            0.43,
            0.45,
            0.5
          ],
          label: "Elie",
          borderColor: '#005bff',
        }
      ]
    }
  },
  {
    "Name": "Jeff",
    "Empid": 10012,
    "Visitorid": "na",
    "cluster/location": "location1",
    "voilation score": 2,
    "voilation density": 0.1,
    "mask": "yes",
    "video": JeffVideo,
    "graph": {
      labels: [
        '12-07-20',
        '14-07-20',
        '15-07-20',
        '16-07-20',
        '24-07-20'
      ],
      datasets: [
        {
          data: [
            0.25,
            0.09,
            0.14,
            0.25,
            0.14
          ],
          label: "Jeff",
          borderColor: '#005bff',
        }
      ]
    }
  },
  {
    "Name": "John",
    "Empid": 10013,
    "Visitorid": "na",
    "cluster/location": "location2",
    "voilation score": 1,
    "voilation density": 0.1,
    "mask": "yes",
    "video": JohnVideo,
    "graph": {
      labels: [
        '12-07-20',
        '14-07-20',
        '15-07-20',
        '16-07-20',
        '24-07-20'
      ],
      datasets: [
        {
          data: [
            0.29,
            0.13,
            0.43,
            0.45,
            0.5
          ],
          label: "John",
          borderColor: '#005bff',
        }
      ]
    }
  },
  {
    "Name": "Martha",
    "Empid": 10550,
    "Visitorid": "na",
    "cluster/location": "location3",
    "voilation score": 2,
    "voilation density": 0.2,
    "mask": "yes ",
    "video": MarthVideo, 
    "graph": {
      labels: [
        '12-07-20',
        '14-07-20',
        '15-07-20',
        '16-07-20',
        '24-07-20'
      ],
      datasets: [
        {
          data: [
            0.29,
            0.13,
            0.43,
            0.45,
            0.5
          ],
          label: "Martha",
          borderColor: '#005bff',
        }
      ]
    }
  },

]

