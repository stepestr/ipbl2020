/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // Chart variables
// #############################

let optionsTemp = {
  maintainAspectRatio: false,
  legend: {
    display: true,
    fullWidth: true,
    labels: {
      fontColor: "white",
      usePointStyle: true,
    }
  },
  tooltips: {
    backgroundColor: '#1e1e2f',
    titleFontColor: "#FFF",
    bodyFontColor: "#FFF",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }
    ]
  }
}

let optionsStatus = {
  maintainAspectRatio: false,
  legend: {
    display: true,
    fullWidth: true,
    labels: {
      fontColor: "white",
      usePointStyle: true
    }
  },
  tooltips: {
    backgroundColor: '#1e1e2f',
    titleFontColor: "#FFF",
    bodyFontColor: "#FFF",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",

  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent"
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 1,
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {

          padding: 20,
          fontColor: "#9a9a9a"
        }
      }
    ]
  }
}

let optionsBarTemp = {
  maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: '#1e1e2f',
      titleFontColor: "#FFF",
      bodyFontColor: "#FFF",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  };

let optionsEmer = {
  maintainAspectRatio: false,
    legend: {
      display: true,
      fullWidth: false,
      borderWidth: 0,
      labels: {
        fontColor: "white",
        usePointStyle: true,
        borderWidth: 0,
      }
    },
    tooltips: {
      backgroundColor: '#1e1e2f',
      titleFontColor: "#FFF",
      bodyFontColor: "#FFF",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
}

module.exports = {
  optionsTemp,
  optionsStatus,
  optionsBarTemp,
  optionsEmer,
};
