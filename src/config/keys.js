module.exports = {
    jwt: {
        secret: 'xxxxxxxxxxx', // Code to verify signature
        session: { session: false }
    },
    mongodb: { // Database hosted on Mlab
        mlab: 'mongodb://manfred:xxxxx@xxxxx.mlab.com:11875/valle'
    },
    server: { // Setting port
        port: process.env.PORT || 8081
    }
}
