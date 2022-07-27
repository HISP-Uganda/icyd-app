const moment = require("moment");
const { processTrackedEntityInstances, useTracker } = require("./process");
const generate = async (lastUpdatedDuration) => {
  try {
    console.log("Working on HVAT");
    await processTrackedEntityInstances("HEWq6yr4cs5", 100, 100, {
      lastUpdatedDuration,
    });
    console.log("Working on GROUP ACTIVITIES");
    await processTrackedEntityInstances("IXxHJADVCkb", 100, 100, {
      lastUpdatedDuration,
    });
    console.log("Working on AVAT");
    const tei = await processTrackedEntityInstances("RDEklSXCD4C", 100, 100, {
      lastUpdatedDuration,
    });
    console.log("Generating the layering");
    await useTracker(
      [
        moment().subtract(3, "quarters"),
        moment().subtract(2, "quarters"),
        moment().subtract(1, "quarters"),
        moment(),
      ],
      tei.flat()
    );
  } catch (error) {
    console.log(error.message);
  }
};

const args = process.argv.slice(2);

generate(args[0]).then(() => console.log("Done"));