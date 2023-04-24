const logger = {
    info: (args) => {
        //Green for the tag, reset for the message
        console.log(`\x1b[32m[ CINDY - INFO ]\x1b[0m ${args}`);
    },
    warn: (args) => {
        //Yellow for the tag, reset for the message
        console.log(`\x1b[33m[ CINDY - WARN ]\x1b[0m ${args}`);
    },
    error: (args) => {
        //Red for the tag, reset for the message
        console.log(`\x1b[31m[ CINDY - ERROR ]\x1b[0m ${args}`);
    },
    system: (args) => {
        //Blue for the tag, reset for the message
        console.log(`\x1b[34m[ CINDY - SYSTEM ]\x1b[0m ${args}`);
    },
    custom: (args, type, color = '\x1b[36m') => {
        //Cyan color by default for the tag, reset for the message
        console.log(`${color}[ CINDY - ${type} ]\x1b[0m ${args}`);
    }
};

export default logger;
