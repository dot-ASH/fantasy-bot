import { config } from "dotenv";
import { client } from "../../index.js";
import { AttachmentBuilder, EmbedBuilder } from "discord.js";
config();
const fantasy_role = process.env.ROLE;

export async function sendtxt(text) {

    const Channel = client.channels.cache.find(
      (channel) => channel.id === "1016729926965149781"
    );
    const exampleEmbed = new EmbedBuilder()
      .setTitle(`Players,`)
      .setColor(0x5e548e)
      .setDescription(text);
    await Channel.send({
      content: `${fantasy_role}`,
      embeds: [exampleEmbed],
    });
  }