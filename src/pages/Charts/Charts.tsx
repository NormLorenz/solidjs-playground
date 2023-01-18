const Charts = () => {

  // https://www.solidjs.com/tutorial/bindings_refs

  // create an element to display the chart
  const chart = <div style="width:700px; height:400px;"></div>;

  // Load the Visualization API and the corechart package.
  google.charts.load('current', { 'packages': ['corechart'] });

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table, instantiates the line chart, passes in the data and draws it.
  function drawChart() {
    
    // Set Data
    const data = google.visualization.arrayToDataTable([
      ['Price', 'Size'],
      [50, 7], [60, 8], [70, 8], [80, 9], [90, 9], [100, 9],
      [110, 10], [120, 11], [130, 14], [140, 14], [150, 15]
    ]);

    // Set Options
    const options = {
      title: 'House Prices vs Size',
      hAxis: { title: 'Square Meters' },
      vAxis: { title: 'Price in Millions' },
      backgroundColor: 'gray',
      titleColor: 'lightgray'
    };

    // Instantiate and draw our chart, passing in some options.
    const _chart = new google.visualization.LineChart(chart as Element);

    // Draw Chart
    _chart.draw(data, options);
  }

  return (
    <div class="container">

      <div class="row p-3">
        <div class="col d-flex justify-content-center">
          <h1>Charts Page</h1>
        </div>
      </div>

      <div class="row p-3">
        <div class="col d-flex justify-content-center">
          {chart}
        </div>
      </div>

    </div>
  )
}

export default Charts;
