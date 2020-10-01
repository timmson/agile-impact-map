const {expect} = require("chai");
require("mocha");

const MindMap = require("../src/mindmap");
const NodesAndLinks = require("./nodes.test")

describe("Map should", () => {

	const mindMap = new MindMap(NodesAndLinks);

	it("transform source to nodes and links", () => {

		const map = mindMap.getMap();

		expect(map.nodes).has.length(2);
		expect(map.links).has.length(1);
		expect(map.nodes[0].color).eq("#7fa23e");
		expect(map.links[0].color).eq("#939393");
/*
		console.log(map);*/
	});

});