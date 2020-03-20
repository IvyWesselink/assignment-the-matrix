let matrix = [
    [11975, 5871, 8916, 2868],
    [1951, 10048, 2060, 6171],
    [8010, 16145, 8090, 8045],
    [1013, 990, 940, 6907]
  ];
  
  d3.select("head").append("style").text("td {padding: 10px;}");
  d3.select("head").append("style").text("table {margin: 10%;");

  
  let table = d3.select("body").append("table")
    .selectAll("tr")
    .data(matrix)

    .enter()
        .append("tr")
        .on('mouseover', function (){
            d3.select(this).attr('style', 'background: pink');
            })
        .selectAll("td")
        .data(function(d){
            return d;
        })

    .enter()
        .append('td')
        .text(function(d){
            return d;
        })
        .on('mouseover', function (){
            d3.select(this).attr('style', 'background: purple');
        })     
