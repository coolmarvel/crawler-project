import Crawler from "./crawler";

const start = async () => {
  const crawler = new Crawler();
  crawler.start();
};
start();

// import nodeScheduler from "node-schedule";

// nodeScheduler.scheduleJob("*/10 * * * * *", async () => {
//   console.log("start crawler");

//   console.log("end crawler");
// });
