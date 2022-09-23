import { SlashCommandBuilder } from "discord.js";

const fantasyCommand = new SlashCommandBuilder()
  .setName("fantasy")
  .setDescription("UCL Fantasy League")
  .addStringOption((option) =>
    option
      .setName("menu")
      .setDescription("Modules")
      .setRequired(false)
      .addChoices(
        { name: "Leaderborard", value: "leaderboard" },
        { name: "Next Match Day", value: "nextmatches" },
        { name: "Previous Match Day Result", value: "prevmatches" },
        { name: "Previous MOTM", value: "motm" },
        { name: "Previous Winner :v", value: "prevWinner" }
      )
  )
  .addStringOption((option) =>
    option
      .setName("points")
      .setDescription("Modules")
      .setRequired(false)
      .addChoices(
        { name: "ANTU", value: "antu" },
        { name: "Nemesis CF", value: "intesar" },
        { name: "Mikasa Ackerman", value: "prio" },
        { name: "FC IOGムPoseidon", value: "akif" },
        { name: "Team-Goal Diggers", value: "arif" },
        { name: "Bitto", value: "bitto" },
        { name: "SASH", value: "sakir" },
        { name: "Kenshin XI", value: "siam" },
        { name: "Mayer Dua", value: "mahfuz" },
        { name: "Shelby.Ltd", value: "sami" },
        { name: "Tj United", value: "turjo" },
        { name: "TEAM SAGE", value: "rashiq" }
      )
  );

export default fantasyCommand.toJSON();
