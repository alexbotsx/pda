let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `➜ 𝗠𝗘𝗡𝗦𝗔𝗝𝗘: ${pesan}`
  let teks = `╭┈˖⋆ ❁────
  𝗠𝗘𝗡𝗖𝗜𝗢𝗡 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 💌
╰┄───➤ •.

*Bot Para grupo y Personalizados Aquí*💸
*https://chat.whatsapp.com/LbdiPrImAbI67gaA5Dyf3j.*\n\n ${oi}\n\n ➜ *ETIQUETA*:\n`
  for (let mem of participants) {
  teks += `🕷️🕸️･ @${mem.id.split('@')[0]}\n`}
  teks += `➜ GHOST BOT`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler