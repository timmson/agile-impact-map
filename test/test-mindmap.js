const MindMap = require("../src/mindmap");
const NodesAndLinks = {
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

};

describe("Map should", () => {

	const mindMap = new MindMap(NodesAndLinks);

	test("transform source to nodes and links", () => {

		const map = mindMap.getMap();

		expect(map.nodes).toHaveLength(2);
		expect(map.links).toHaveLength(1);
		expect(map.nodes[0].color).toEqual("#7fa23e");
		expect(map.links[0].color).toEqual("#939393");
	});

});