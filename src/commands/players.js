import { EmbedBuilder } from "discord.js";

const siteUrl = "https://gaming.uefa.com/en/uclfantasy/overview";
const teamUrl = "";
export const sakir = {
  name: "SASH",
  url: "https://gaming.uefa.com/en/uclfantasy/team/afa29b3a-2b8b-11ed-9b53-0226af96a432/00530061006b00690072004100730068/0/0/1",
  point: 199,
};
export const intesar = {
  name: "Nemesis CF",
  url: "https://gaming.uefa.com/en/uclfantasy/team/15d7b426-2c2c-11ed-a748-06bf5dfa2474/0049006e00740065007300610072002000480061007300730061006e/0/0/0",
  point: 140,
};
export const prio = {
  name: "Mikasa Ackerman",
  url: "https://gaming.uefa.com/en/uclfantasy/team/5e05119a-2938-11ed-a8da-068cf607bef6/00610072006500660069006e007000720069006f00330031003000310035/0/0/0",
  point: 151,
};
export const akif = {
  name: "FC IOGムPoseidon",
  url: "https://gaming.uefa.com/en/uclfantasy/team/8ed12d2e-2d5f-11ed-966b-06bf5dfa2474/0049004f004730e00050006f0073006500690064006f006e/0/0/0",
  point: 147,
};
export const antu = {
  name: "ANTU",
  url: "https://gaming.uefa.com/en/uclfantasy/team/e5995f4c-2d45-11ed-bca5-06bf5dfa2474/0061006e007400750073006100640061007400310032/0/0/0",
  point: 146,
};
export const arif = {
  name: "Team-Goal Diggers",
  url: "https://gaming.uefa.com/en/uclfantasy/team/e671819e-24a1-11ed-a95f-02e1e80ecb1c/004100720069006600200052006100660069/0/0/0",
  point: 153,
};
export const bitto = {
  name: "Bitto",
  url: "https://gaming.uefa.com/en/uclfantasy/team/1e66a172-2ae4-11ed-88ee-0226af96a432/0066006100680069006d002e0062006900740074006f/0/0/0",
  point: 137,
};
export const siam = {
  name: "Kenshin XI",
  url: "https://gaming.uefa.com/en/uclfantasy/team/ef2122b6-2ae3-11ed-887c-0226af96a432/005300690061006d/0/0/0",
  point: 132,
};
export const sami = {
  name: "Shelby.Ltd",
  url: "https://gaming.uefa.com/en/uclfantasy/team/370ffba2-2de5-11ed-b4f1-06bf5dfa2474/00640061006d006e007300680065006c0062007900320037/0/0/0",
  point: 115,
};
export const mahfuz = {
  name: "Mayer Dua",
  url: "https://gaming.uefa.com/en/uclfantasy/team/a51906e2-2afd-11ed-a0b0-0226af96a432/004d00610079006500720020004400750061/0/0/0",
  point: 100,
};
export const rashiq = {
  name: "TEAM SAGE",
  url: "https://gaming.uefa.com/en/uclfantasy/team/d3ac70e2-2d88-11ed-a231-06bf5dfa2474/0053004100470045/0/0/0",
  point: 115,
};
export const turjo = {
  name: "TJ United",
  url: "https://gaming.uefa.com/en/uclfantasy/team/bc05d798-2d5c-11ed-9cd7-06bf5dfa2474/007400750072006a006f00730068006f006b/0/0/0",
  point: 108,
};

var players = [
  intesar,
  sakir,
  prio,
  akif,
  antu,
  arif,
  siam,
  bitto,
  sami,
  mahfuz,
  rashiq,
  turjo,
];

players.sort((a, b) => parseFloat(b.point) - parseFloat(a.point));

const leaderBoardEmbed = new EmbedBuilder()
  .setTitle("Match Day 2")
  .setURL("https://gaming.uefa.com/en/uclfantasy/league-leaderboard/7743805")
  .setAuthor({
    name: "Fantasy League Bot",
    iconURL: "https://i1.lensdump.com/i/17MRxo.jpg",
    url: "https://gaming.uefa.com/en/uclfantasy/overview",
  })
  .setColor(0x5e548e)
  .setDescription("UCL 2022 League Leaderboard")
  .addFields({ name: `=======================`, value: "\u200b" })
  players.forEach(player => {
leaderBoardEmbed.addFields(
    { name: `${player.name} \t\t\t ${player.point}`, value: "\u200b"},

  )
  .setFooter({
    text: players[0].name,
    iconURL: "https://i.lensdump.com/i/1lVeXr.gif",
  });
  }); {
  
}

export default leaderBoardEmbed.toJSON();
