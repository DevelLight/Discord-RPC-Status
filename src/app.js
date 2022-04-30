const clientId = '';
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientId);

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: 'Developer, Designer',
        state: 'I love Coding and Modelling!',
        startTimestamp: Date.now(),
        largeImageKey: 'bot_logo',
        largeImageText: 'DevelLight',
        instance: false,
        buttons: [
            {
            label: 'My Website',
            url: 'https://devellight.net/'
            },
            {
            label: 'Projects',
            url: 'https://devellight.net'
         }
    ]
 });
};

RPC.on('ready', () => {
    setActivity();

    setInterval(() => {
       setActivity();
    }, 15 * 1000);
});

RPC.login({clientId}).catch(err => console.error(err));