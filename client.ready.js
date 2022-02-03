
module.exports = {
    readyClient : (client,prefix) => {
        client.on("ready", () => {
        
        setInterval(() => {client.user.setActivity(prefix + " - " +client.guilds.cache.size + " Servers!") }, 10000 );
        console.log("Online!");
    })
}
}