const chartHeight = 13;
const chartWidth = 13;

//TWORZENIE TABLICY NA PODSTAWIE ZMIENNYCH \/

export const chartSize =[ [], [] ];

for (let i=0; i<chartWidth; i++)
  chartSize[0].push(i);
for (let i=0; i<chartHeight; i++)
  chartSize[1].push(i);

let chartRow = [];
export const chartTable = [];

chartSize[0].map(itemHeight => {
  chartSize[1].map(itemWidth => {
    chartRow.push(`${itemHeight}-${itemWidth}`);
  });
  chartTable.push(chartRow);
  chartRow = [];
});
