//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const trakt = require("./modules/trakt/api");

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));

var links = [
  {
    name: "Niagara Falls",
    path: "/niagarafalls"
  },
  {
    name: "Elora",
    path: "/elora"
  },
  {
    name: "Algonquin(Huntsville)",
    path: "/algonquin"
  }
];
//PAGE ROUTES
app.get("/", async (request, response) => {
   response.render("index", { title: "Trip Planer", menu: links});

});
app.get("/niagarafalls", async (request, response) => {
  let dailyweather=await trakt.getWeatherniagarafalls();
  let staylist=await trakt.getAirbnbniagarafalls();
  // console.log(staylist.data[2]);
  response.render("niagarafalls", { title: "Niagara Falls",weather: dailyweather,stay: staylist  });
  //  response.render("niagarafalls", { title: "Weather",weather: dailyweather  });
});
app.get("/elora", async (request, response) => {
  let dailyweather=await trakt.getWeatherElora();
  let staylist=await trakt.getAirbnbelora();
  response.render("elora", { title: "Elora",weather: dailyweather,stay: staylist   });
});
app.get("/algonquin", async (request, response) => {
  let dailyweather=await trakt.getWeatherHuntsville();
  let staylist=await trakt.getAirbnbHuntsville();
  response.render("algonquin", { title: "Algonquin",weather: dailyweather,stay: staylist });
});

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});


