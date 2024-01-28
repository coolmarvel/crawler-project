/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from "firebase-functions";
// import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import Crawler from "./crawler";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.region("asia-northeast3").https.onRequest((request, response) => {
//   logger.info("Hello logs!", { structuredData: true });

//   response.send("Hello from Firebase!");
// });

export const startCrawler = functions
  .region("asia-northeast3")
  .runWith({ memory: "2GB", timeoutSeconds: 120 })
  .https.onRequest(async (request, response) => {
    logger.info("Start Crawler", { structuredData: true });

    const crawler = new Crawler();
    await crawler.start();

    response.send("End Crawler");
  });
