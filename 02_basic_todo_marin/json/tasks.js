// This file parses the all products from the JSON data and stores them in a variable.

let tododata = JSON.parse(`{
    "tasks": [
       {
         "id": "0",
         "name": "In a large mixing bowl, create a well with flour then add eggs, slowly whisking them into flour.",
         "due": "Wed Feb 12 2020 12:30:00 GMT+0100",
         "done": "false"
       },
       {
         "id": "1",
         "name": "Add sugar and salt and stir until combined. Gradually add the milk, whisking to combine.",
         "due": "Fri Feb 14 2020 13:00:00 GMT+0100",
         "done": "false"
       },
       {
         "id": "2",
         "name": "Let batter stand at room temperature until bubbly on top, 15 to 20 minutes.",
         "due": "Sat Feb 15 2020 13:30:00 GMT+0100",
         "done": "false"
       },
       {
         "id": "3",
         "name": "In a small skillet over medium heat, melt butter.",
         "due": "Sun Feb 16 2020 14:00:00 GMT+0100",
         "done": "false"
       },
       {
         "id": "4",
         "name": "About 1/4 cup at a time, drop batter evenly onto pan, swirling it to evenly coat.",
         "due": "Mon Feb 17 2020 14:30:00 GMT+0100",
         "done": "false"
       },
       {
         "id": "5",
         "name": "Cook 2 minutes, then flip and cook 1 minute more; repeat with remaining batter.",
         "due": "Tue Feb 18 2020 15:00:00 GMT+0100",
         "done": "false"
       },
       {
         "id": "6",
         "name": "Serve crêpes warm with fresh fruit and powdered sugar.",
         "due": "Wed Feb 19 2020 15:30:00 GMT+0100",
         "done": "false"
       }
    ]
 }`)