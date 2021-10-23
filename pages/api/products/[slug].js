// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { products } = require("../products.json");

export default function handler(req, res) {
	const produk = products.filter((s) => s.slug === req.query.slug);
	console.log(produk);
	res.status(200).json(JSON.stringify(produk));
}
