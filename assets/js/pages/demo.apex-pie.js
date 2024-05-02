var colors = ["#727cf5", "#6c757d", "#0acf97", "#fa5c7c", "#e3eaef"],
  dataColors = $("#simple-pie").data("colors"),
  options = {
    chart: { height: 320, type: "pie" },
    series: [44, 55, 41, 17, 15],
    labels: [
      "FR - FUPP - Eks Kondisi Rusak",
      "DS - Digunakan - Kondisi Sedang",
      "TL - Tidak Digunakan - Berlebih",
      "TC - Tidak Digunakan - Cadangan",
      "FL - FUPP - Eks Berlebih",
    ],
    colors: (colors = dataColors ? dataColors.split(",") : colors),
    legend: {
      show: !0,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: !1,
      fontSize: "14px",
      offsetX: 0,
      offsetY: 7,
    },
    responsive: [
      {
        breakpoint: 600,
        options: { chart: { height: 240 }, legend: { show: !1 } },
      },
    ],
  },
  chart = new ApexCharts(document.querySelector("#simple-pie"), options),
  colors =
    (chart.render(), ["#39afd1", "#ffbc00", "#313a46", "#fa5c7c", "#0acf97"]),
  dataColors = $("#simple-donut").data("colors"),
  options = {
    chart: { height: 320, type: "donut" },
    series: [44, 55, 41, 17, 15],
    legend: {
      show: !0,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: !1,
      fontSize: "14px",
      offsetX: 0,
      offsetY: 7,
    },
    labels: [
      "FR - FUPP - Eks Kondisi Rusak",
      "DS - Digunakan - Kondisi Sedang",
      "TL - Tidak Digunakan - Berlebih",
      "TC - Tidak Digunakan - Cadangan",
      "FL - FUPP - Eks Berlebih",
    ],
    colors: (colors = dataColors ? dataColors.split(",") : colors),
    responsive: [
      {
        breakpoint: 600,
        options: { chart: { height: 240 }, legend: { show: !1 } },
      },
    ],
  },
  options =
    ((chart = new ApexCharts(
      document.querySelector("#simple-donut"),
      options
    )).render(),
    {
      chart: { height: 320, type: "pie" },
      series: [25, 15, 44, 55, 41, 17],
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      legend: {
        show: !0,
        position: "bottom",
        horizontalAlign: "center",
        verticalAlign: "middle",
        floating: !1,
        fontSize: "14px",
        offsetX: 0,
        offsetY: 7,
      },
      theme: { monochrome: { enabled: !0 } },
      responsive: [
        {
          breakpoint: 600,
          options: { chart: { height: 240 }, legend: { show: !1 } },
        },
      ],
    }),
  colors =
    ((chart = new ApexCharts(
      document.querySelector("#monochrome-pie"),
      options
    )).render(),
    ["#727cf5", "#6c757d", "#0acf97", "#fa5c7c", "#e3eaef"]),
  dataColors = $("#gradient-donut").data("colors"),
  options = {
    chart: { height: 320, type: "donut" },
    series: [44, 55, 41, 17, 15],
    legend: {
      show: !0,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: !1,
      fontSize: "14px",
      offsetX: 0,
      offsetY: 7,
    },
    labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
    colors: (colors = dataColors ? dataColors.split(",") : colors),
    responsive: [
      {
        breakpoint: 600,
        options: { chart: { height: 240 }, legend: { show: !1 } },
      },
    ],
    fill: { type: "gradient" },
  },
  colors =
    ((chart = new ApexCharts(
      document.querySelector("#gradient-donut"),
      options
    )).render(),
    ["#39afd1", "#ffbc00", "#313a46", "#fa5c7c", "#0acf97"]),
  dataColors = $("#patterned-donut").data("colors"),
  options = {
    chart: {
      height: 320,
      type: "donut",
      dropShadow: {
        enabled: !0,
        color: "#111",
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.2,
      },
    },
    stroke: { show: !0, width: 2 },
    series: [44, 55, 41, 17, 15],
    colors: (colors = dataColors ? dataColors.split(",") : colors),
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    dataLabels: { dropShadow: { blur: 3, opacity: 0.8 } },
    fill: {
      type: "pattern",
      opacity: 1,
      pattern: {
        enabled: !0,
        style: [
          "verticalLines",
          "squares",
          "horizontalLines",
          "circles",
          "slantedLines",
        ],
      },
    },
    states: { hover: { enabled: !1 } },
    legend: {
      show: !0,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: !1,
      fontSize: "14px",
      offsetX: 0,
      offsetY: 7,
    },
    responsive: [
      {
        breakpoint: 600,
        options: { chart: { height: 240 }, legend: { show: !1 } },
      },
    ],
  },
  colors =
    ((chart = new ApexCharts(
      document.querySelector("#patterned-donut"),
      options
    )).render(),
    ["#39afd1", "#ffbc00", "#727cf5", "#0acf97"]),
  dataColors = $("#image-pie").data("colors"),
  options = {
    chart: { height: 320, type: "pie" },
    labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
    colors: (colors = dataColors ? dataColors.split(",") : colors),
    series: [44, 33, 54, 45],
    fill: {
      type: "image",
      opacity: 0.85,
      image: {
        src: [
          "assets/images/small/small-1.jpg",
          "assets/images/small/small-2.jpg",
          "assets/images/small/small-3.jpg",
          "assets/images/small/small-4.jpg",
        ],
        width: 25,
        imagedHeight: 25,
      },
    },
    stroke: { width: 4 },
    dataLabels: { enabled: !1 },
    legend: {
      show: !0,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: !1,
      fontSize: "14px",
      offsetX: 0,
      offsetY: 7,
    },
    responsive: [
      {
        breakpoint: 600,
        options: { chart: { height: 240 }, legend: { show: !1 } },
      },
    ],
  },
  colors =
    ((chart = new ApexCharts(
      document.querySelector("#image-pie"),
      options
    )).render(),
    ["#727cf5", "#6c757d", "#0acf97", "#fa5c7c"]),
  dataColors = $("#update-donut").data("colors"),
  options = {
    chart: { height: 320, type: "donut" },
    dataLabels: { enabled: !1 },
    series: [44, 55, 13, 33],
    colors: (colors = dataColors ? dataColors.split(",") : colors),
    legend: {
      show: !0,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: !1,
      fontSize: "14px",
      offsetX: 0,
      offsetY: 7,
    },
    responsive: [
      {
        breakpoint: 600,
        options: { chart: { height: 240 }, legend: { show: !1 } },
      },
    ],
  };
function appendData() {
  var e = chart.w.globals.series.map(function () {
    return Math.floor(100 * Math.random()) + 1;
  });
  return e.push(Math.floor(100 * Math.random()) + 1), e;
}
function removeData() {
  var e = chart.w.globals.series.map(function () {
    return Math.floor(100 * Math.random()) + 1;
  });
  return e.pop(), e;
}
function randomize() {
  return chart.w.globals.series.map(function () {
    return Math.floor(100 * Math.random()) + 1;
  });
}
function reset() {
  return options.series;
}
(chart = new ApexCharts(
  document.querySelector("#update-donut"),
  options
)).render(),
  document.querySelector("#randomize").addEventListener("click", function () {
    chart.updateSeries(randomize());
  }),
  document.querySelector("#add").addEventListener("click", function () {
    chart.updateSeries(appendData());
  }),
  document.querySelector("#remove").addEventListener("click", function () {
    chart.updateSeries(removeData());
  }),
  document.querySelector("#reset").addEventListener("click", function () {
    chart.updateSeries(reset());
  });
