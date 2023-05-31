const cluster = require('cluster');
const os = require('os');
const app = require('./src/app')

const numCPUs = os.cpus().length;
if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    app.listen(3001, () => {
        console.log(`Worker ${process.pid} started`);
    });
}