import leaderBoardEmbed, {
  sakir,
  intesar,
  bitto,
  siam,
  mahfuz,
  sami,
  turjo,
  rashiq,
  antu,
  prio,
  akif,
  arif,
} from "../commands/players.js";
import { AttachmentBuilder, EmbedBuilder } from "discord.js";
import { prevMatch, nextMatch } from "../commands/matchday.js";
import prevMotm from "../commands/motm.js";

export const leaderboard = {
  name: "interactionCreate",
  async execute(interaction) {
    try {
      if (
        interaction.isChatInputCommand &&
        interaction.options.get("menu") !== null
      ) {
        if (interaction.options.get("menu").value === "leaderboard") {
          interaction.reply({
            embeds: [leaderBoardEmbed],
          });
        }
      }
    } catch (error) {
      console.log(error);
      interaction.reply({
        content: `Server is busy.... try again after few min`,
        ephemeral: true,
      });
    }
  },
};

export const score = {
  name: "interactionCreate",
  async execute(interaction) {
    try {
      if (
        interaction.isChatInputCommand &&
        (await interaction.options.get("points")) !== null
      ) {
        if ((await interaction.options.get("points").value) === "sakir") {
          interaction.reply({
            content: sakir.point.toString(),
            ephemeral: true,
          });
        }
        if ((await interaction.options.get("points").value) === "intesar") {
          interaction.reply({
            content: intesar.point.toString(),
            ephemeral: true,
          });
        }
        if ((await interaction.options.get("points").value) === "prio") {
          interaction.reply({
            content: prio.point.toString(),
            ephemeral: true,
          });
        }
        if ((await interaction.options.get("points").value) === "akif") {
          interaction.reply({
            content: akif.point.toString(),
            ephemeral: true,
          });
        }
        if ((await interaction.options.get("points").value) === "arif") {
          interaction.reply({
            content: arif.point.toString(),
            ephemeral: true,
          });
        }
        if ((await interaction.options.get("points").value) === "bitto") {
          interaction.reply({
            content: bitto.point.toString(),
            ephemeral: true,
          });
        }
        if ((await interaction.options.get("points").value) === "siam") {
          interaction.reply({
            content: siam.point.toString(),
            ephemeral: true,
          });
        }
        if ((await interaction.options.get("points").value) === "mahfuz") {
          interaction.reply({
            content: mahfuz.point.toString(),
            ephemeral: true,
          });
        }
        if ((await interaction.options.get("points").value) === "sami") {
          interaction.reply({
            content: sami.point.toString(),
            ephemeral: true,
          });
        }
        if ((await interaction.options.get("points").value) === "turjo") {
          interaction.reply({
            content: turjo.point.toString(),
            ephemeral: true,
          });
        }
        if ((await interaction.options.get("points").value) === "rashiq") {
          interaction.reply({
            content: rashiq.point.toString(),
            ephemeral: true,
          });
        }
        if ((await interaction.options.get("points").value) === "antu") {
          interaction.reply({
            content: antu.point.toString(),
            ephemeral: true,
          });
        }
      }
    } catch (error) {
      console.log(error);
      interaction.reply({
        content: `Server is busy.... try again after few min`,
        ephemeral: true,
      });
    }
  },
};

export const prevNextMatch = {
  name: "interactionCreate",
  async execute(interaction) {
    try {
      if (
        interaction.isChatInputCommand &&
        interaction.options.get("menu") !== null
      ) {
        if (interaction.options.get("menu").value === "nextmatches") {
          const file = new AttachmentBuilder("./src/img/nextMatch.jpg");
          const exampleEmbed = new EmbedBuilder()
            .setTitle(`Match Day  ${nextMatch.matchday}`)
            .setImage("attachment://nextMatch.jpg")
            .setAuthor({
              name: "Fantasy League Bot",
              iconURL: "https://i1.lensdump.com/i/17MRxo.jpg",
              url: "https://gaming.uefa.com/en/uclfantasy/overview",
            })
            .setColor(0x5e548e);
          await interaction.reply({
            embeds: [exampleEmbed],
            files: [file],
          });
        }
        if (interaction.options.get("menu").value === "prevmatches") {
          const file = new AttachmentBuilder("./src/img/prevResult.jpg");
          const Embed = new EmbedBuilder()
            .setTitle(`Match Day  ${prevMatch.matchday}`)
            .setImage("attachment://prevResult.jpg")
            .setAuthor({
              name: "Fantasy League Bot",
              iconURL: "https://i1.lensdump.com/i/17MRxo.jpg",
              url: "https://gaming.uefa.com/en/uclfantasy/overview",
            })
            .setColor(0x5e548e);
          interaction.reply({
            embeds: [Embed],
            files: [file],
          });
        }
      }
    } catch (error) {
      console.log(error);
      interaction.reply({
        content: `Server is busy.... try again after few min`,
        ephemeral: true,
      });
    }
  },
};

// ADMIN

export const motm = {
  name: "interactionCreate",
  async execute(interaction) {
    try {
      if (
        interaction.isChatInputCommand &&
        interaction.options.get("menu") !== null
      ) {
        if (interaction.options.get("menu").value === "motm") {
          const Embed = new EmbedBuilder()
            .setTitle(`Man of the match`)
            .setColor(0x5e548e)
            .setThumbnail("https://i3.lensdump.com/i/1nEUNH.gif")
            .setAuthor({
              name: "Fantasy League Bot",
              iconURL: "https://i1.lensdump.com/i/17MRxo.jpg",
              url: "https://gaming.uefa.com/en/uclfantasy/overview",
            })
            .addFields({
              name: `MOTM - ${prevMatch.matchday}`,
              value: prevMotm,
            });
          interaction.reply({
            embeds: [Embed],
          });
        }
      }
    } catch (err) {
      console.log(err);
      interaction.reply({
        content: `Server is busy.... try again after few min`,
        ephemeral: true,
      });
    }
  },
};

export const prevWinner = {
  name: "interactionCreate",
  async execute(interaction) {
    try {
      if (
        interaction.isChatInputCommand &&
        interaction.options.get("menu") !== null
      ) {
        if (interaction.options.get("menu").value === "prevWinner") {
          const file = new AttachmentBuilder("./src/img/winner21.jpg");
          const exampleEmbed = new EmbedBuilder()
            .setTitle(`Winner of 2021`)
            .setImage("https://i1.lensdump.com/i/1eQxwT.jpg")
            .setColor(0x5e548e)
            .setAuthor({
              name: "Fantasy League Bot",
              iconURL: "https://i1.lensdump.com/i/17MRxo.jpg",
              url: "https://gaming.uefa.com/en/uclfantasy/overview",
            })
            .setFooter({
              text: "Mikasa Ackerman",
              iconURL: "https://i2.lensdump.com/i/1nEvWD.gif",
            });
          await interaction.reply({
            embeds: [exampleEmbed],
          });
        }
      }
    } catch (error) {
      console.log(error);
      interaction.reply({
        content: `Server is busy.... try again after few min`,
        ephemeral: true,
      });
    }
  },
};

export const aboutInt = {
  name: "interactionCreate",
  async execute(interaction) {
    try {
      if (interaction.isChatInputCommand) {
        console.log();
        if (interaction.commandName === "about") {
          const exampleEmbed = new EmbedBuilder()
            .setTitle(`Introducing Fantasy Bot`)
            .setDescription("This is Cool People Fantasy League Bot. Type")
            .setColor(0x5e548e)
            .setAuthor({
              name: "Fantasy League Bot",
              iconURL: "https://i1.lensdump.com/i/17MRxo.jpg",
              url: "https://gaming.uefa.com/en/uclfantasy/overview",
            })
            .addFields({ name: `/fantasy`, value: ";to see the modules" })
            .addFields({
              name: `fantasy > menu > leaderboard`,
              value: ";to see the leaderboard",
            })
            .addFields({
              name: `/fantasy > menu > Next Matches`,
              value: ";to see the next matchday fixture ",
            })
            .addFields({
              name: `/fantasy > menu >  Previous match day results`,
              value: ";to see the results of previous match",
            })
            .addFields({
              name: `/fantasy > menu > Previous match MOTM ;`,
              value: "to see the man of the matches of previous match day",
            })
            .addFields({
              name: `/fantasy > menu > Previous winner ;`,
              value: "to see the winner of last fantasy league",
            })
            .addFields({
              name: `/fantasy  > points > `,
              value: ";to see your points which is only for your eyes. ",
            });
          await interaction.reply({
            embeds: [exampleEmbed],
          });
        }
      }
    } catch (error) {
      console.log(error);
      interaction.reply({
        content: `Server is busy.... try again after few min`,
        ephemeral: true,
      });
    }
  },
};
