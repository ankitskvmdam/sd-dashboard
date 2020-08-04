import AmyVideo from "./sd_video/amy-corrected.mp4";
import LaylaVideo from "./sd_video/layla-corrected.mp4";
import MikeVideo from "./sd_video/mike-corrected.mp4";
import NatashaVideo from "./sd_video/natasha-corrected.mp4";

export default [
  {
    "Name": "Amy",
    "Employee ID": "10011",
    "Visitor ID": "Null",
    "Cluster/Location": "location1",
    "Voilation Score": "14",
    "Voilation Density": "0.3",
    "video": AmyVideo,
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
            0.3, 0.2, 0.56, 0.13, 0.22, 0.4
          ],
          label: "Amy",
          borderColor: '#005bff',
        }
      ]
    }
  },
  {
    "Name": "Mike",
    "Employee ID": "10012",
    "Visitor ID": "Null",
    "Cluster/Location": "location2",
    "Voilation Score": "4",
    "Voilation Density": "0.4",
    "video": MikeVideo,
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
            0.15, 0.2, 0.11, 0.13, 0.11, 0.2
          ],
          label: "Mike",
          borderColor: '#005bff',
        }
      ]
    }
  },
  {
    "Name": "Layla",
    "Employee ID": "10013",
    "Visitor ID": "Null",
    "Cluster/Location": "location2",
    "Voilation Score": "6",
    "Voilation Density": "0.6",
    "video": LaylaVideo,
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
            0.33, 0.25, 0, 0.1, 0.16, 
          ],
          label: "Layla",
          borderColor: '#005bff',
        }
      ]
    }
  },
  {
    "Name": "Grace",
    "Employee ID": "10550",
    "Visitor ID": "Null",
    "Cluster/Location": "location3",
    "Voilation Score": "4",
    "Voilation Density": "0.4",
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
            0.2, 0.2, 0.22, 0.25, 0.22, 0.1
          ],
          label: "Grace",
          borderColor: '#005bff',
        }
      ]
    }
  },
  {
    "Name": "Natasha",
    "Employee ID": "10551",
    "Visitor ID": "Null",
    "Cluster/Location": "location4",
    "Voilation Score": "2",
    "Voilation Density": "0.2",
    "video": NatashaVideo,
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
          label: "Natasha",
          borderColor: '#005bff',
        }
      ]
    }
  }
]
