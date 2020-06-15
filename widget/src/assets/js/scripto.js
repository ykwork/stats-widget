 var barChartData = {
            labels : ["Mon","Tue","Wed","Thu","Fri","Sat","Mon"],
            datasets : [
              {
                highlightFill: "#45668e",
                highlightStroke: "#45668e",
                fillColor : "#1ABC9C",
                strokeColor : "#1ABC9C",
                data : [90,90,90,90,90,90,90]
              },
              {
                highlightFill: "#1abc9c",
                highlightStroke: "#1abc9c",
                fillColor : "#45668e",
                strokeColor : "#45668e",
                data : [90,85,75,65,75,85,90]
              }
            ]
            
          };
          
 new Chart(document.getElementById("bar").getContext("2d")).Bar(barChartData);

 var myApp=angular.module('myApp', []);
          myApp.controller("doughnut", function($scope))
          var doughnutData = [
              {
                value: 20,
                color:"#45668e",
                highlight: "#1abc9c",
                label: "Paid"
              },
              {
                value : 50,
                color : "#5d799b",
                highlight: "#1abc9c",
                label: "Direct"
              },
              {
                value : 30,
                color : "#325279",
                highlight: "#1abc9c",
                label: "Organic"
              }
            
            ];
new Chart(document.getElementById("doughnut").getContext("2d")).Doughnut(doughnutData);