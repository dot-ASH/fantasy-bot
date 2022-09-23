import { config } from "dotenv";
import { prevMatch, nextMatch } from "./matchday.js";
import { client } from "../../index.js";
import { AttachmentBuilder, EmbedBuilder } from "discord.js";
config();
const fantasy_role = process.env.ROLE;

export async function timer() {
  let now = new Date();
  /*
   1 day reminder
   */

  // Match day 3

  if (
    now.getFullYear() === 2022 &&
    now.getMonth() === 9 &&
    now.getDate() === 3 &&
    now.getHours() === 20 &&
    now.getMinutes() === 1
  ) {
    const Channel = client.channels.cache.find(
      (channel) => channel.id === "1016729926965149781"
    );
    const file = new AttachmentBuilder("./src/img/nextMatch.jpg");
    const exampleEmbed = new EmbedBuilder()
      .setTitle(`Match Day  ${nextMatch.matchday}`)
      .setImage("attachment://nextMatch.jpg")
      .setColor(0x5e548e);
    await Channel.send({
      content: `Hey ${fantasy_role} 1 day is left to transfer before matchday 3`,
      embeds: [exampleEmbed],
      files: [file],
    });
  }

  // Match day 4

  if (
    now.getFullYear() === 2022 &&
    now.getMonth() === 9 &&
    now.getDate() === 10 &&
    now.getHours() === 20 &&
    now.getMinutes() === 1
  ) {
    const Channel = client.channels.cache.find(
      (channel) => channel.id === "1016729926965149781"
    );
    const file = new AttachmentBuilder("./src/img/nextMatch.jpg");
    const exampleEmbed = new EmbedBuilder()
      .setTitle(`Match Day  ${nextMatch.matchday}`)
      .setImage("attachment://nextMatch.jpg")
      .setColor(0x5e548e);
    await Channel.send({
      content: `Hey ${fantasy_role} 1 day is left to transfer before matchday 4`,
      embeds: [exampleEmbed],
      files: [file],
    });
  }
  // Match day 5

  if (
    now.getFullYear() === 2022 &&
    now.getMonth() === 9 &&
    now.getDate() === 24 &&
    now.getHours() === 20 &&
    now.getMinutes() === 1
  ) {
    const Channel = client.channels.cache.find(
      (channel) => channel.id === "1016729926965149781"
    );
    const file = new AttachmentBuilder("./src/img/nextMatch.jpg");
    const exampleEmbed = new EmbedBuilder()
      .setTitle(`Match Day  ${nextMatch.matchday}`)
      .setImage("attachment://nextMatch.jpg")
      .setColor(0x5e548e);
    await Channel.send({
      content: `Hey ${fantasy_role} 1 day is left to transfer before matchday 4`,
      embeds: [exampleEmbed],
      files: [file],
    });
  }

  // Match day 6

  if (
    now.getFullYear() === 2022 &&
    now.getMonth() === 9 &&
    now.getDate() === 31 &&
    now.getHours() === 20 &&
    now.getMinutes() === 1
  ) {
    const Channel = client.channels.cache.find(
      (channel) => channel.id === "1016729926965149781"
    );
    const file = new AttachmentBuilder("./src/img/nextMatch.jpg");
    const exampleEmbed = new EmbedBuilder()
      .setTitle(`Match Day  ${nextMatch.matchday}`)
      .setImage("attachment://nextMatch.jpg")
      .setColor(0x5e548e);
    await Channel.send({
      content: `Hey ${fantasy_role} 1 day is left to transfer before matchday 4`,
      embeds: [exampleEmbed],
      files: [file],
    });
  }

  /*
   1 hour reminder
   */

  // Match day 3

  if (
    now.getFullYear() === 2022 &&
    now.getMonth() === 9 &&
    now.getDate() === 4 &&
    now.getHours() === 21 &&
    now.getMinutes() === 1
  ) {
    const Channel = client.channels.cache.find(
      (channel) => channel.id === "1016729926965149781"
    );
    const file = new AttachmentBuilder("./src/img/nextMatch.jpg");
    const exampleEmbed = new EmbedBuilder()
      .setTitle(`Match Day  ${nextMatch.matchday}`)
      .setImage("attachment://nextMatch.jpg")
      .setColor(0x5e548e);
    await Channel.send({
      content: `Hey ${fantasy_role} last hour is left to transfer before matchday 3`,
      embeds: [exampleEmbed],
      files: [file],
    });
  }

  // Match day 4

  if (
    now.getFullYear() === 2022 &&
    now.getMonth() === 9 &&
    now.getDate() === 11 &&
    now.getHours() === 21 &&
    now.getMinutes() === 1
  ) {
    const Channel = client.channels.cache.find(
      (channel) => channel.id === "1016729926965149781"
    );
    const file = new AttachmentBuilder("./src/img/nextMatch.jpg");
    const exampleEmbed = new EmbedBuilder()
      .setTitle(`Match Day  ${nextMatch.matchday}`)
      .setImage("attachment://nextMatch.jpg")
      .setColor(0x5e548e);
    await Channel.send({
      content: `Hey ${fantasy_role} last hour is left to transfer before matchday 4`,
      embeds: [exampleEmbed],
      files: [file],
    });
  }
  // Match day 5

  if (
    now.getFullYear() === 2022 &&
    now.getMonth() === 9 &&
    now.getDate() === 25 &&
    now.getHours() === 21 &&
    now.getMinutes() === 1
  ) {
    const Channel = client.channels.cache.find(
      (channel) => channel.id === "1016729926965149781"
    );
    const file = new AttachmentBuilder("./src/img/nextMatch.jpg");
    const exampleEmbed = new EmbedBuilder()
      .setTitle(`Match Day  ${nextMatch.matchday}`)
      .setImage("attachment://nextMatch.jpg")
      .setColor(0x5e548e);
    await Channel.send({
      content: `Hey ${fantasy_role} last hour is left to transfer before matchday 4`,
      embeds: [exampleEmbed],
      files: [file],
    });
  }

  // Match day 6

  if (
    now.getFullYear() === 2022 &&
    now.getMonth() === 10 &&
    now.getDate() === 1 &&
    now.getHours() === 21 &&
    now.getMinutes() === 1
  ) {
    const Channel = client.channels.cache.find(
      (channel) => channel.id === "1016729926965149781"
    );
    const file = new AttachmentBuilder("./src/img/nextMatch.jpg");
    const exampleEmbed = new EmbedBuilder()
      .setTitle(`Match Day  ${nextMatch.matchday}`)
      .setImage("attachment://nextMatch.jpg")
      .setColor(0x5e548e);
    await Channel.send({
      content: `Hey ${fantasy_role} last hour is left to transfer before matchday 4`,
      embeds: [exampleEmbed],
      files: [file],
    });
  }


  
  /*
   Result
   */

  // Match day 3

  if (
    now.getFullYear() === 2022 &&
    now.getMonth() === 9 &&
    now.getDate() === 6 &&
    now.getHours() === 5 &&
    now.getMinutes() === 1
  ) {
    const Channel = client.channels.cache.find(
      (channel) => channel.id === "1016729926965149781"
    );
    const file = new AttachmentBuilder("./src/img/prevResult.jpg");
    const exampleEmbed = new EmbedBuilder()
      .setTitle(`Match Day  ${prevMatch.matchday}`)
      .setImage("attachment://prevReuslt.jpg")
      .setColor(0x5e548e);
    await Channel.send({
      content: `Hey ${fantasy_role} Results of matchday 3`,
      embeds: [exampleEmbed],
      files: [file],
    });
  }

  // Match day 4

  if (
    now.getFullYear() === 2022 &&
    now.getMonth() === 9 &&
    now.getDate() === 13 &&
    now.getHours() === 5 &&
    now.getMinutes() === 1
  ) {
    const Channel = client.channels.cache.find(
      (channel) => channel.id === "1016729926965149781"
    );
    const file = new AttachmentBuilder("./src/img/prevResult.jpg");
    const exampleEmbed = new EmbedBuilder()
      .setTitle(`Match Day  ${prevMatch.matchday}`)
      .setImage("attachment://prevReuslt.jpg")
      .setColor(0x5e548e);
    await Channel.send({
      content: `Hey ${fantasy_role} Results of matchday 4`,
      embeds: [exampleEmbed],
      files: [file],
    });
  }
  // Match day 5

  if (
    now.getFullYear() === 2022 &&
    now.getMonth() === 9 &&
    now.getDate() === 27 &&
    now.getHours() === 5 &&
    now.getMinutes() === 1
  ) {
    const Channel = client.channels.cache.find(
      (channel) => channel.id === "1016729926965149781"
    );
    const file = new AttachmentBuilder("./src/img/prevResult.jpg");
    const exampleEmbed = new EmbedBuilder()
      .setTitle(`Match Day  ${prevMatch.matchday}`)
      .setImage("attachment://prevReuslt.jpg")
      .setColor(0x5e548e);
    await Channel.send({
      content: `Hey ${fantasy_role} Results of matchday 5`,
      embeds: [exampleEmbed],
      files: [file],
    });
  }
  // Match day 6

  if (
    now.getFullYear() === 2022 &&
    now.getMonth() === 10 &&
    now.getDate() === 3 &&
    now.getHours() === 5 &&
    now.getMinutes() === 1
  ) {
    const Channel = client.channels.cache.find(
      (channel) => channel.id === "1016729926965149781"
    );
    const file = new AttachmentBuilder("./src/img/prevResult.jpg");
    const exampleEmbed = new EmbedBuilder()
      .setTitle(`Match Day  ${prevMatch.matchday}`)
      .setImage("attachment://prevReuslt.jpg")
      .setColor(0x5e548e);
    await Channel.send({
      content: `Hey ${fantasy_role} Results of matchday 5`,
      embeds: [exampleEmbed],
      files: [file],
    });
  }

  // temp 
  if (
    now.getFullYear() === 2022 &&
    now.getMonth() === 8 &&
    now.getDate() === 20 &&
    now.getHours() === 16 &&
    now.getMinutes() === 1
  ) {
    const Channel = client.channels.cache.find(
      (channel) => channel.id === "1016729926965149781"
    );
    const file = new AttachmentBuilder("./src/img/prevResult.jpg");
    const exampleEmbed = new EmbedBuilder()
      .setTitle(`Match Day  ${prevMatch.matchday}`)
      .setImage("attachment://prevReuslt.jpg")
      .setColor(0x5e548e);
    await Channel.send({
      content: `Hey ${fantasy_role} Results of matchday 5`,
      embeds: [exampleEmbed],
      files: [file],
    });
  }
}
