const colors = {"product": "#7fa23e", "process": "#1599b5", "technical": "#d0542c", "link": "#939393"};

class MindMap {

	constructor(source) {
		this.source = source || [];
	}

	getMap() {

		const nodes = this.source.nodes.map((node) => {
			node.color = colors[node.type];
			return node;
		});

		const links = this.source.links.map((link) => {
			link.color = colors["link"];
			return link;
		});

		return {nodes, links};
	}

}

module.exports = MindMap;