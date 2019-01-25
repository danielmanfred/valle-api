module.exports = {
    jwt: {
        secret: 'jx0tbchs20y4fsu6sb7y',
        session: { session: false }
    },
    mongodb: {
        mlab: 'mongodb://manfred:ellav19@ds211875.mlab.com:11875/valle'
    },
    server: {
        port: process.env.PORT || 8081
    }
}