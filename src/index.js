const core = require('@actions/core');
const github = require('@actions/github');

try {
  const greeting = core.getInput('greeting');
  console.log(`Hello ${greeting}`);
  const time = new Date().toTimeString();
  core.setOutput('time', time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload ${payload}`);
} catch (err) {
  core.setFailed(err.message);
}
