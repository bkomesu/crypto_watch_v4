export const historyOptions = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 1.5,
  },

  animation: {
    duration: 2000,
  },
  maintainAspectRatio: false,
  responsive: true,

  options: {
    scales: {
      x: {
        type: "time",
        distribution: "linear",
      },
    },
  },
};
