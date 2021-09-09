// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { products } = require("../product.json");

export default function handler(req, res) {
	const jasa = products.filter((s) => s.slug === req.query.slug);
	res.status(200).json(JSON.stringify(jasa));
}
