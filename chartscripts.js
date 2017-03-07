/**
 * @author Kevin Sun
 */
// script example loade from https://developers.google.com/chart/interactive/docs/quick_start

// load corechart package from the Google Charts libraries
google.charts.load('current', {
	'packages' : ['corechart']
});

// tell Google what to do after the load is complete
google.charts.setOnLoadCallback(function() {// anonymous function to draw both charts
	makeMyChart();
	// column chart
	makeMySecondChart();
	// pie chart
});

// this function runs after the load
function makeMyChart() {

	// populate the data that the chart will use
	var myGoogleDataTable = new google.visualization.DataTable();
	myGoogleDataTable.addColumn('string', 'Country of Origin');
	// add a column
	myGoogleDataTable.addColumn('number', '# of Pending Apps');
	// another column
	// once columns are defined, add the actual data (from UNHCR 2015 Mid-Year report)
	myGoogleDataTable.addRows([['Afghanistan', 3746], ['Myanmar', 1023], ['Somalia', 596], ['Iraq', 460], ['Sri Lanka', 278], ['Ethiopia', 244]]);

	// customize the chart
	var myChartConfigurationObject = {
		'title' : 'Pending Asylum Applications in Indonesia as of Jun 30, 2015, by Country of Origin',
		'width' : 700,
		'height' : 400,
		fontName : 'Courier New',
		fontSize : 12,
		legend : 'none',
		titleTextStyle : {
			italic : false
		}
	};

	// find the DOM element and initiate a chart in it
	var myBarChart = new google.visualization.ColumnChart(document.getElementById('the_div_where_the_chart_goes'));
	// draw the chart
	myBarChart.draw(myGoogleDataTable, myChartConfigurationObject);
}

// new chart for Week 6
function makeMySecondChart() {

	// populate the data that the chart will use
	var myGoogleDataTable = new google.visualization.DataTable();
	myGoogleDataTable.addColumn('string', 'Country of Origin');
	// add a column
	myGoogleDataTable.addColumn('number', '# of New Apps');
	// another column
	myGoogleDataTable.addColumn({type:'string', role:'annotation'});
	// once columns are defined, add the actual data (from UNHCR 2015 Mid-Year report)
	myGoogleDataTable.addRows(unhcrData);

	// customize the chart
	var myChartConfigurationObject = {
		'title' : 'Refugees, asylum-seekers, internally displaced persons (IDPs), returnees (refugees and IDPs), stateless persons, and others of concern to UNHCR by country/territory of asylum, end-2015',
		'width' : 700,
		'height' : 600,
		legend : {
			position : 'labeled'
		},
		// ^ want to have second-largest slice in final position (counter-clockwise from 12 o'clock), as per WSJ style guide
		// but that would make the default legend ordering confusing, so replaced with labeled legend
		fontName : 'Courier New',
		fontSize : 12,
		bar: { groupWidth: 15 }
	};

	// find the DOM element and initiate a chart in it
	var myBarChart = new google.visualization.BarChart(document.getElementById('the_div_where_the_second_chart_goes'));
	// draw the chart
	myBarChart.draw(myGoogleDataTable, myChartConfigurationObject);
}
