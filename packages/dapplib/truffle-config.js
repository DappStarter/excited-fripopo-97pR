require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth oil essay idea knee bridge gauge'; 
let testAccounts = [
"0x54494f53056dfcb58cef3ba1d6302e4174c958be49b8eb79a60eabc6de6586cd",
"0x157633b60f61e115149e906ecd41a8bb967662aed9e95cf51cfc5a1d9d43f9ed",
"0x27ed9bd8337abf10b260ef3eaccf888450a5c33dbb7f8069a3a3659bf3af2535",
"0xedadf0515faa2db5f61b45e3ca060d15f2a74138a389522cd03f4310dfcb48ad",
"0x74a429411ef136acd72c8a08827fae39eb8405df2aedea709631166b3572b3a2",
"0xa611183ee95e30257c6ac220d907ebf4884febb580db7c5d0a600c4674afcb7c",
"0xc43ef915e48f7ebe7d49be02eced14b4fbd86da4718ecc0060e1b145de073288",
"0xb7411ab2e4eb49b802e67cb9378b60e73581278e919983854433cf9a41bcf896",
"0xca296d97bf4b4e085c9eb9ce621bbf28d2db62ffa1df43343c7a442501e9a768",
"0x62c76b974417f5f00ff141b4e5316a0f8ff4f3e6f5688db6bd293056937f8cd9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

