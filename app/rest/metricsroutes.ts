/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import { Router } from 'express';
import promClient from 'prom-client';
import { helper } from '../common/helper';
import { collectMetrics } from '../metrics/collect-metrics';

const logger = helper.getLogger('metricRoutes');
export async function metricsRoutes(router: Router, platform: any) {
	// scrap metrics for every 5 seconds
	setInterval(() => {
		collectMetrics(platform);
	}, 5 * 1000);

	router.get('/', async (_, res) => {
		logger.info('available metrics....');
		// console.log(await promClient.register.getSingleMetric('metric_blockstorage_commit_time'));	//debug promMetrics
		res.send(await promClient.register.metrics());
	});
	// ------------------------------------------------------------------
	// router.get('/test', (req, res) => {
	// 	try{
	// 		res.send( collectMetrics(platform) );
	// 	}catch (err) {
	// 		return res.send(err);
	// 	}
	// });
}
