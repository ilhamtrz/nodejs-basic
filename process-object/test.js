const cpuInformation = process.memoryUsage().heapUsed;
 
console.log(cpuInformation);

const processargv2 = process.argv[1];

console.log(processargv2);

const nodeEnv = process.env.NODE_ENV

console.log(nodeEnv);