require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain mixture gesture gloom swift topic'; 
let testAccounts = [
"0x897ef0de89d903c447bc35878287d219cb5d384e2e76307539ced016016a215c",
"0x2e8c24f778521902c0dbb610e1fe6f316fe9dca2174fb443f8600ff783ab36b9",
"0x6b2a7b6bc0a5cb85842cb23cbca8e4959127adc069a6b455e5abcec40cdd5a5b",
"0xee95e033cde9d0045422db10ae9f146352c8d0580488d1b5a950f5ee71b7ed6b",
"0x6a33c018564d4f780925924258af9d1aaed0aacb41543ebd14190462223c3d89",
"0x786045693c523a7ba5a729419e6b7760d39c1c11accc79bbec0458474f430bd9",
"0x14243a0276282936537d5c97156c9c5b85e0345f3abb1dfda2aeb4b602159b1d",
"0xfeb57cbf29da4b8444c18f4b6bfeaa10cd4217a1b3e22c140428b3556d4e7cd3",
"0x36d395a4a1224d76d8ccfafd0785707bd6591a16abe51d1293484084db891d1f",
"0x5e83f8fa8f2518b4b8f14fb0618008dcfcf5ca36d60db0dc85c047d89836573c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


