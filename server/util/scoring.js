
export function calculateScore(food, wine) {
	const attributesAccepted = food.accepts;
	const attributes = wine.attributes;

	let score = 0;
	score += Math.abs(attributes.body - attributesAccepted.body);
	score += Math.abs(attributes.sweet - attributesAccepted.sweet);
	score += Math.abs(attributes.acid - attributesAccepted.acid);
	score += Math.abs(attributes.fruit - attributesAccepted.fruit);
	score += Math.abs(attributes.oak - attributesAccepted.oak);
	score += Math.abs(attributes.tannin - attributesAccepted.tannin);

	return score;
}