module.exports = {
	nodes: [
		{
			key: 1,
			text: "Problem",
			type: "product",
			link: "https://agilix.nl/blog-en/broad-product-definition/"
		},
		{
			key: 2,
			text: "Solution hypothesis",
			type: "product",
			link: "https://agilix.nl/blog-en/broad-product-definition/"
		}
	],
	links: [
		{
			from: 1,
			to: 2,
			text: "spawns",
			type: "solid"
		}
	]

}