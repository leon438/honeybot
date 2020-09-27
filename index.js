const talk = require('./talk.json')
const Discord = require('discord.js')
const client = new Discord.Client()
const sleep = ms => new Promise(r => setTimeout(r, ms))
const prefix = '우유야 '

client.on('ready', async() => {
  console.log(`Logged in as ${client.user.tag}!도움말`)
  console.log(`---------------------------- \n\n가동 완료 \n\n---------------------------- \n\n---------------------------- \n\n${client.users.cache.size}명의 사용자와 함께 하는 중 \n\n${client.guilds.cache.size}개의 서버와 함께 하는 중 \n\n ----------------------------`)
  client.user.setActivity('우유야 도움말')
  client.user.setStatus('offline')
  while(1) {
    client.user.setActivity(`${client.users.cache.size}명의 사용자와 함께`)
    await sleep(3000)
    client.user.setActivity(`${client.guilds.cache.size}명의 사용자와 함께`)
    await sleep(3000)
    client.user.setActivity(`갓-JS로 만들어졌다구!!`)
    await sleep(3000)
    client.user.setActivity(`우유야 도움말`)
    await sleep(3000)
  }
})

client.on('message', async message => {
  if (message.content ===  prefix + '핑' || message.content === prefix + '속도') {
    message.channel.send('퐁!')
    let embed = new Discord.MessageEmbed().setColor('0x00ff00').setTitle("핑").setDescription("현재 핑을 구하는 중이예요....")
    message.channel.send(embed).then(async content => {
      if (Math.round(client.ws.ping) > 210) {
        const pong = new Discord.MessageEmbed().setColor('0xff0000').setTitle("🏓퐁!").setDescription(`현재 핑: ${Math.round(client.ws.ping)}ms \n 상태: 불안정⛔`).setFooter("프로그램을 다시시작하는게 좋아요")
        await content.edit(pong)
      }
      else {
        const pong = new Discord.MessageEmbed().setColor('0x00ff00').setTitle("🏓퐁!").setDescription(`현재 핑: ${Math.round(client.ws.ping)}ms \n 상태: 양호✅`).setFooter("상태가 매우 좋아요")
        await content.edit(pong)
      }
    })
  }

  if (message.content === prefix + '멘션해줘' || message.content === prefix + '멘션') {
    message.channel.send(`<@${message.author.id}>`)
  }

  else if (message.content === '우유야') {
    message.channel.send(`네,${message.author.username}님?`)
  }

  else if (message.content === prefix + '뭐해' || message.content === prefix + '뭐해?') {
    message.channel.send(`${message.author.username}님이랑 예기 하고 있죠!😁`)
  }

  else if (message.content === prefix + '안녕') {
    message.channel.send(`안녕하세요,${message.author.username}님`)
  }

  else if (message.content.startsWith('우유야 따라해')) {
    const a = message.content.split(/우유야 따라해/)
    message.channel.send(`${a[1]}`)
  }

  else if (message.content === '우유 바보') {
    message.channel.send('```diff\n-흥!\n\n\n```')
  }

  else if (message.content === '우유양') {
  message.channel.send('으악!(심쿵사)')
  }

  else if (message.content.startsWith("?")) {
    message.channel.send('무슨일 있어요?(궁금)')
  }

  else if (message.content.startsWith("ㅋ")) {
    message.channel.send('저도 같이 웃어요!(키득키득)')
  }

  else if (message.content === prefix + '도움주신 분들') {
    const embed = new Discord.MessageEmbed()
       .setTitle('도움주신분들😀')
       .setDescription('토일님,그릭님,플러그님 등등.... \n 진심으로 감사합니다!(꾸벅)\n\n-리언')
       .setColor('#dbdff6')
       .setFooter(`${message.author.username}의 임베드에요!`)
    message.channel.send(embed)
  }

  else if (message.content === prefix + '정보') {
    let img = 'https://cdn.discordapp.com/attachments/746195753239838753/748326885972246568/milk-2389222.png';
    const embed = new Discord.MessageEmbed()
       .setTitle('우유봇의 정보')
       .setAuthor('우유봇',img)
       .setThumbnail(img)
       .setDescription('📝이름:우유봇 \n\n🎉생일:8월 26일\n\n💱버전:v1\n\n😁주인:리언')
       .setColor('#00ffff')
       .setFooter(`${message.author.username}의 임베드에요!`)
    message.channel.send(embed)
  }

  else if (message.content ===  prefix + '내 정보') {    
    const embed = new Discord.MessageEmbed()
    .setTitle(`**${message.author.username}** 님의 프사에요!`)
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`이름:${message.author.username}\n\n유저 id:${message.author.id}\n\n 유저 태그:${message.author.tag}`)
    .setColor('#00fff00')
    .setFooter(`${message.author.username}의 임베드에요!`)
    message.channel.send(embed)
  }  

  else if (message.content === prefix + '패치노트') {
    const embed = new Discord.MessageEmbed()
       .setTitle('우유봇 패치노트')
       .setAuthor('우유봇','https://cdn.discordapp.com/attachments/746195753239838753/748326885972246568/milk-2389222.png')
       .setThumbnail('https://cdn.discordapp.com/attachments/746195753239838753/748326885972246568/milk-2389222.png')
       .setDescription('8/26:개발 완료')
       .setColor('##a2eee3')
       .setFooter(`${message.author.username}의 임베드에요!`)
    message.channel.send(embed)
  }

  else if (message.content === prefix + '도움' || message.content === prefix + '도움말') {
    const embed = new Discord.MessageEmbed()
       .setTitle('우유봇 도움말')
       .setDescription('우유봇과 대화하기: 우유야 [할말] \n\n 우유봇이 따라하게 만들기:우유야 따라해 [아무말] \n\n 도움말:우유야 도움 \n\n 임베드:우유야 임베드 출력 [아무말] \n\n 우유봇 정보:우유야 정보\n\n 우유봇 패치노트 보기:우유야 패치노트')
       .setColor('#b0ffd9')
       .setFooter(`${message.author.username}의 임베드에요!`)
    message.channel.send(embed)
  }

  else if (message.content.startsWith(prefix + '임베드 출력')) {
    const b = message.content.split(/우유야 임베드 출력/)
    const embed = new Discord.MessageEmbed()
       .setTitle('임베드')
       .setDescription(`${b[1]}`)
       .setColor('#00ffff')
       .setFooter(`${message.author.username}의 임베드에요!`)
    message.channel.send(embed)
  }

  if (message.content.startsWith("우유야 서버") || message.content.startsWith("우유야 server")) {
    const server = new Discord.MessageEmbed()
      .setTitle(`${message.guild.name} 서버 정보`)
      .setDescription(`
      ⚪ | 서버 이름: ${message.guild.name}
      🔖 | 서버 주인: ${message.guild.owner.user.username}

      🔑 | 서버 아이디: ${message.guild.id}

      👩 | 서버 멤버: ${message.guild.memberCount}명

      🔴 | 서버 부스트 레벨: ${message.guild.premiumTier} 레벨
      🔴 | 부스트 개수: ${message.guild.premiumSubscriptionCount}개

      📢 | 규칙 채널: ${message.guild.rulesChannel}
      🛠 | 시스템 채널: ${message.guild.systemChannel}

      💬 | 텍스트 채널: ${message.guild.channels.cache.filter(x => x.type === "text").size}개
      🔊 | 음성 채널: ${message.guild.channels.cache.filter(x => x.type === "voice").size}개`)
    message.channel.send(server)
  }

  else if (message.content.startsWith(prefix)) {
    console.log(message.content)
    content = message.content.substring(prefix.length)
    console.log(content)
    if (talk[content] === undefined) return
    message.channel.send(talk[content])
  }
})

client.login('NzQ2NzAzMDQ1NTI5Njk4Mzg2.X0ELZw.mhvznwqdOIc7jDPM3pu8yZTHEYE')