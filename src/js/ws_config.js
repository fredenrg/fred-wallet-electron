var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'FREDElectron';
config.appDescription = 'FRED Wallet';
config.appSlogan = 'The ALTcoin for alternative energy';
config.appId = 'fred.fredenergy.electronwallet';
config.appGitRepo = 'https://github.com/fredenrg/fred-wallet-electron';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 32809;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'twl';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'FRED-walletd';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "v0.2.3";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'http://explorer.fredcoinpool.com/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'pnode.fredcoinpool.com';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = 'null';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
    'pnode.fredcoinpool.com:32809',
    '207.154.253.243:32809',
    '127.0.0.1:32809',
];

// your currency name
config.assetName = 'FRED';
// your currency ticker
config.assetTicker =  'FRED';
// your currency address prefix, for address validation
config.addressPrefix =  'FRED';
// standard wallet address length, for address validation
config.addressLength = 101;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 189;

// minimum fee for sending transaction
config.minimumFee = 0.1;
// minimum amount for sending transaction
config.mininumSend = 0.0001;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to convert from atomic unit
config.decimalDivisor = 1000000000;
// to represent human readable value
config.decimalPlaces = 9;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
];

module.exports = config;
