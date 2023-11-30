/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import client from 'prom-client';

export const metric_ledger_height = new client.Gauge({
	name: 'metric_ledger_height',
	help: 'metric_ledger_height_low: returns ledger height of the peer nodes',
	labelNames: ['channel', 'mspid', 'requests', 'server_hostname']
});

export const metric_channel_height = new client.Gauge({
	name: 'metric_channel_height',
	help: 'metric_channel_height: returns block height of channel',
	labelNames: ['channel', 'channel_genesis_hash']
});

export const metric_channel_transaction_count = new client.Gauge({
	name: 'metric_channel_transaction_count',
	help: 'metric_channel_txns: returns transaction count on a channel',
	labelNames: ['channel', 'channel_genesis_hash']
});

export const metric_node_up = new client.Gauge({
	name: 'metric_node_up',
	help: 'metric_node_up: returns status of peer and orderer node',
	labelNames: ['node', 'mspid']
});
//
export const metric_fabric_version = new client.Gauge({
	name: 'metric_fabric_version',
	help: '	The active version of Fabric.',
	labelNames: ['version']
});
//
export const metric_blockstorage_commit_time = new client.Histogram({
	name: 'metric_blockstorage_commit_time',
	help: 'Time taken in sec for committing block changes to state db.',
	labelNames: ['channel'],
	// 0.005 0.01 0.015
	buckets: [1000, 2000, 3000, 4000, 5000]
	// buckets for response time from 1s to 10s
});
// metric_fabric_version.labels({ version : "fabric :" }).set(2.4);

// module.exports.handleHistogramValue = (req, res) => {
// 	metrics.histogram.observe(Number(req.params.value));
// 	res.send({ message: "Success" });
//   };
