const Discord = require('discord.js')

module.exports = {
    name: 'snipe',
    description: 'snipe the latest message',
    run: async (client, message, args) => {
        const msg = client.snipes.get(message.channel.id)
        if(!msg) return message.channel.send("Didn't find any deleted messages")

        const embed = new Discord.MessageEmbed()
        .setDescription(msg.content)
        .setColor(color)
        .setAuthor("Message par" + msg.author, msg.avatar)
        .setFooter("Snipe")
        .setTimestamp()

        if(msg.image) embed.setImage(msg.Image)
        message.channel.send({ embeds: [embed] })
    }
}


