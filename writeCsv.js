const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const csvFileName = "csv/test1.csv";

const csvWriter = createCsvWriter({
  path: csvFileName,
  header: [
    { id: "twitterId", title: "Twitter ID" },
    { id: "numOfFollowers", title: "Number of Followers" },
    { id: "isOfficial", title: "Is official" },
  ],
});

const records = [
  { twitterId: "hoshito", numOfFollowers: 100, isOfficial: true },
  { twitterId: "Sparkling water", numOfFollowers: 50, isOfficial: false },
];

csvWriter.writeRecords(records).then(() => {
  console.log(csvFileName + "... has been created");
});
