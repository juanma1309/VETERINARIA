const Connection = require('tedious').Connection;

const configConnection = {
    server: "seminario-server.database.windows.net",
    authentication: {
        type: "default",
        options: {
            userName: "administrador",
            password: "Seminario2023@",
        },
    },
    options: {
        encrypt: true,
        database: "SEMINARIO_VET",
        rowCollectionOnDone: true,
    },
};

const getConnection = () => {
    const connect = () => new Promise((resolve, reject) => {
        const connectionInstance = new Connection(configConnection);
        connectionInstance.on('connect', (error) => {
            if(!error) {
                resolve(connectionInstance);
            }
            else {
                reject(error);
            }
        });

        connectionInstance.connect();
    });

    return {connect};
};

module.exports = getConnection;