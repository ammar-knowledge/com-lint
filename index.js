// Ours
const { App } = require("octokit");
const commitlint = require("./lib/lint");

module.exports = App => {
  // For more information on building apps:
  // https://probot.github.io/docs/
  app.on("pull_request.opened", commitlint);
  app.on("pull_request.synchronize", commitlint);
};
