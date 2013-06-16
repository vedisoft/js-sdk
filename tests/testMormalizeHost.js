function normalizeHost(host) {
    var defaults = {
        port: '10150',
        prefix: 'wss'
    };

    if (host.match(/:\d+$/) === null) {
        host = host + ':' + defaults.port;
    }

    if (host.match(/^wss?p?:\/\//) === null) {
        host = defaults.prefix + '://' + host;
    }

    return host;
}

console.log(
    normalizeHost('wss://localhost:10150') === 'wss://localhost:10150',
    normalizeHost('ws://localhost:10150') === 'ws://localhost:10150',
    normalizeHost('localhost:10150') === 'wss://localhost:10150',
    normalizeHost('localhost') === 'wss://localhost:10150',
    normalizeHost('ws://localhost') === 'ws://localhost:10150'
);