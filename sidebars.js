/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
		{
			type: 'category',
			label: 'Learn',
			items: [
				{
					id: "learn/archethic-intro",
					type: "doc",
					label: "Introduction"
				},
        "learn/uco",
				"learn/ecosystem",
				"learn/transaction-chain",
				{
					type: 'category',
					label: 'ARCH Consensus',
					link: {
						id: "learn/arch-consensus",
						type: "doc"
					},
					items: [
            "learn/arch-consensus/proof-of-work"
					]
				},
				{
          type: "category",
					label: "Sharding",
					link: {
            id: "learn/sharding",
						type: "doc"
					},
					items: [
						{
							label: "BeaconChain",
							type: "category",
							link: {
								type: "doc",
								id: "learn/sharding/beacon-chain"
							},
							items: [
								{ 
									label: "Explorer",
									type: "doc",
									id: "learn/sharding/beacon-chain/explorer"
								}
							]
						},
						"learn/sharding/atomic-commitment-notification"
					]
				},
				{
          type: "category",
					label: "P2P",
					link: {
            id: "learn/p2p",
						type: "doc"
					},
					items: [
					  "learn/p2p/node",
						"learn/p2p/bootstrapping",
						"learn/p2p/self-repair",
						"learn/p2p/messaging",
					]
				},
				"learn/oracle-chain",
				"learn/fee",
			]
		},
		{
      type: "category",
			label: "Build",
			items: [
				{
          type: "category",
					label: "Smart-Contracts",
					link: {
            type: "doc",
					 id: "build/smart-contracts"
					},
					items: [
					 { 
					   label: "Language",
						 type: "doc",
						 id: "build/smart-contracts/language"
					 },
					 { 
						 label: "Examples",
             type: "doc",   
						 id: "build/smart-contracts/examples"
					 }
				  ] 
				},
				{
          type: "category",
					label: "SDKs",
					items: [
            "build/sdk/js",
						"build/sdk/dart"
					]
				},
				"build/testnet",
				{
					type: "category",
					label: "Core development",
					link: {
						id: "build/core",
						type: "doc"
					},
					items: [
            "build/core/tpm",
						"build/core/yubikey"
					]
				},
				{
					type: "category",
					label: "Client documentation",
					items: [
						"build/clients/wallet-spec",
						"build/clients/ledger-app"
					]
				}
			]
		}
	]
};

module.exports = sidebars;