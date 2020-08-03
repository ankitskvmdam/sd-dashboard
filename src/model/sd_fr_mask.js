import TestVideo from "./sd_mask/mask.mp4";
export default [
  {
    "Name": "person1",
    "Empid": 10011,
    "Visitorid": "na",
    "cluster/location": "location1",
    "voilation score": 2,
    "voilation density": 0.2,
    "mask": "yes",
    "video": TestVideo, 
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
          label: "Person 1",
          borderColor: '#005bff',
        }
      ]
    }
  },
  {
    "Name": "person2",
    "Empid": 10012,
    "Visitorid": "na",
    "cluster/location": "location1",
    "voilation score": 2,
    "voilation density": 0.1,
    "mask": "yes",
    "video": null,
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
          label: "Person 2",
          borderColor: '#005bff',
        }
      ]
    }
  },
  {
    "Name": "person3",
    "Empid": 10013,
    "Visitorid": "na",
    "cluster/location": "location2",
    "voilation score": 1,
    "voilation density": 0.1,
    "mask": "yes",
    "video": null,
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
          label: "Person 3",
          borderColor: '#005bff',
        }
      ]
    }
  },
  {
    "Name": "person4",
    "Empid": 10550,
    "Visitorid": "na",
    "cluster/location": "location3",
    "voilation score": 2,
    "voilation density": 0.2,
    "mask": "yes ",
    "video": null, 
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
          label: "Person 4",
          borderColor: '#005bff',
        }
      ]
    }
  },
  {
    "Name": "person5",
    "Empid": 10551,
    "Visitorid": "na",
    "cluster/location": "location4",
    "voilation score": 3,
    "voilation density": 0.3,
    "mask": "no",
    "video": null, 
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
          label: "Person 5",
          borderColor: '#005bff',
        }
      ]
    }
  }

]

