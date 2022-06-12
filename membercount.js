client.on("ready", () => {
    let guild = client.guilds.cache.get('guild ID')
    // now, we need to set the channel name to those member counts, or it won't work if no members join of leave
    client.channels.cache.get('channel ID').setName(`👥 Total users - ${guild.memberCount}`) 
    client.channels.cache.get('channel ID').setName(`👤 Members - ${guild.members.cache.filter(member => !member.user.bot).size}`) 
    client.channels.cache.get('channel ID').setName(`🤖 Bots - ${guild.members.cache.filter(member => member.user.bot).size}`) /
 

    // make a function
    function statusCount() { 
        client.channels.cache.get('members status count channel ID') // get the channel by ID, the channel is for out status count
        .setName(`🟢 ${guild.members.cache.filter(m => m.presence?.status == 'online').size} ⛔ ${guild.members.cache.filter(m => m.presence?.status == 'dnd').size} 🌙 ${guild.members.cache.filter(m => m.presence?.status == 'idle').size} ⚫ ${guild.members.cache.filter(m => m.presence?.status == 'offline' || !m.presence).size}`)
        // set the channel name to status counts. Filter the member's online/dnd/idle presence status and get the size. For offline, if the user doesn't have a presence or the presence status is equals to offline, count the size of it.
    } statusCount() // run the function

    setInterval(() => { 
        statusCount()
    }, 600000) // don't set the time too low, it won't work sometimes
});



// when members join the server, the voice channel name of members count will update
client.on('guildMemberAdd', (member) =>{ // when members join server
     // get the voice channels by ID
    client.channels.cache.get('channel ID').setName(`👥 Total users - ${member.guild.memberCount}`) 
    client.channels.cache.get('channel ID').setName(`👤 Members - ${member.guild.members.cache.filter(member => !member.user.bot).size}`) 
    client.channels.cache.get('channel ID').setName(`🤖 Bots - ${member.guild.members.cache.filter(member => member.user.bot).size}`) 
})

// when member join the server, it do the member count again. When member leave, it do the membercount again!
client.on('guildMemberRemove', (member) =>{ 
    // get the voice channels by ID
   client.channels.cache.get('channel ID').setName(`👥 Total users - ${member.guild.memberCount}`) 
   client.channels.cache.get('channel ID').setName(`👤 Members - ${member.guild.members.cache.filter(member => !member.user.bot).size}`) 
   client.channels.cache.get('channel ID').setName(`🤖 Bots - ${member.guild.members.cache.filter(member => member.user.bot).size}`) 
})