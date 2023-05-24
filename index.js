const core = require('@actions/core');
const slackifyMarkdown = require('slackify-markdown');

try {
    const input = core.getInput('text', { required: true });
    const mrkdwn = slackifyMarkdown(input);
    const output = mrkdwn.replace(/\n/g, "\n");
    core.setOutput("text", output);
} catch (error) {
    core.setFailed(error.message);
}
