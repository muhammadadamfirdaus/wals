// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { products } = require("../product.json");

export default function handler(req, res) {
	res.status(200).json(JSON.stringify(products));
}
