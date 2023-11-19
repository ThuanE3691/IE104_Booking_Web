/* eslint-disable no-unused-vars */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function for generating random numbers from a normal distribution
function randomNormalDistribution(mean, stdDev) {
	let u = 0,
		v = 0;
	while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
	while (v === 0) v = Math.random();
	const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
	return mean + stdDev * z;
}

function randomExponentialDistribution(lambda) {
	return -Math.log(1 - Math.random()) / lambda;
}

function generateRandomData(sampleSize, totalBins, step, priceMin, priceMax) {
	// Validate input parameters
	if (sampleSize <= 0 || step <= 0 || totalBins <= 0 || priceMin >= priceMax) {
		throw new Error("Invalid input parameters");
	}

	let remaining_samples = sampleSize;

	const data = Array.from({ length: totalBins }, (v, k) => {
		const lambda = 1 / (remaining_samples / totalBins);
		const size_of_bins = Math.max(
			0,
			Math.round(randomExponentialDistribution(lambda))
		);

		remaining_samples -= size_of_bins;
		const bins_min = priceMin + k * step;
		const bins_max = priceMin + (k + 1) * step;

		return {
			size: size_of_bins,
			min: bins_min,
			max: bins_max > priceMax ? priceMax : bins_max,
		};
	});

	return data;
}

export default generateRandomData;
