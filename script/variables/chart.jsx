export let chartHeight = 13;
export let chartWidth = 13;
export const chartCellsNumber = chartHeight * chartWidth;
export let chartTable = [];

//TWORZENIE TABLICY NA PODSTAWIE ZMIENNYCH \/

export const chartSize =[ [], [] ];

renderChartSize();
renderChart();

export function renderChartSize() {
  for (let i=0; i<chartWidth; i++)
    chartSize[0].push(i);
  for (let i=0; i<chartHeight; i++)
    chartSize[1].push(i);
}

export function renderChart() {
  let chartRow = [];
  chartTable = [];
  chartSize[0].map(itemHeight => {
    chartSize[1].map(itemWidth => {
      chartRow.push(`${itemHeight}-${itemWidth}`);
    });
    chartTable.push(chartRow);
    chartRow = [];
  });
  return chartTable;
}
