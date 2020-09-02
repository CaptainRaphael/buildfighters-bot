const Discord = require('discord.js')
const client = new Discord.Client()
let prefix = "/"

client.login('NTY3NjcyMzI1NDcwODE0MjE5.XLW8DQ.13FNPFqt9gLiZga_chh0SARqud0')

client.on('message', function (message) {
    if (message.channel.id === '568426849181368367') {
        if (!message.guild || message.author.bot) return

        let [command, ...args] = message.content.trim().split(/\s+/g)

        if (command.toLowerCase() === prefix + 'move') {
            let sub = args[0]
            if (!sub) return
            if (sub.toLowerCase() === 'buildfighters') {
                let channels = ["565191697177509897", "567686191563014154", "567686220025430016", "567686256838967296", "567686283615272960", "567686310936969217", "567686335054479361"].sort(() => Math.random() - 0.5)
                Promise.all(message.guild.channels.get('564933509626593300').members.array().slice(0, 14).map(function (e, i) {
                    return new Promise(function (res, rej) {
                        e.setVoiceChannel(channels[Math.floor(i / 2)]).finally(function () {
                            res()
                        })
                    })
                })).then(function () {
                    message.channel.send("Tous les membres ont été déplacés").then(function (e) {
                        message.delete(10 * 1000)
                        e.delete(10 * 1000)
                    })
                })
            }
        }
        else if (command.toLowerCase() === prefix + 'mute') {
            let sub = args[0]
            if (!sub) return
            if (sub.toLowerCase() === 'buildfighters') {
                let sub2 = args[1]
                if (!sub2) return
                if (sub2.toLowerCase() === 'except') {
                    Promise.all(message.guild.channels.get('564933509626593300').members.map(function (e) {
                        return new Promise(function (res, rej) {
                            if (!message.mentions.members.has(e.id) && e.manageable) e.setMute(true).finally(function () {
                                res()
                            })
                            else res()
                        })
                    })).then(function () {
                        message.channel.send("Les buildfighters non mentionnés ont été mute").then(function (e) {
                            message.delete(10 * 1000)
                            e.delete(10 * 1000)
                        })
                    })
                }
            }
        }
        else if (command.toLowerCase() === prefix + 'unmute') {
            let sub = args[0]
            if (!sub) return
            if (sub.toLowerCase() === 'buildfighters') {
                Promise.all(message.guild.channels.get('564933509626593300').members.map(function (e) {
                    return new Promise(function (res, rej) {
                        if (e.serverMute && e.manageable) e.setMute(false).finally(function () {
                            res()
                        })
                        else res()
                    })
                })).then(function () {
                    message.channel.send("Les buildfighters ont été unmute").then(function (e) {
                        message.delete(1000 * 10)
                        e.delete(1000 * 10)
                    })
                })
            }
        }
    }
})
