const colors = {"product": "#7fa23e", "process": "#1599b5", "dev": "#d0542c", "link": "#939393"};

class MindMap {

	constructor(source) {
		this.source = source || [];
	}

	getMap() {
		/*		const subjects = {};
				this.questions.forEach(q => {
					if (subjects[q.subject] === undefined) {
						subjects[q.subject] = [q];
					} else {
						subjects[q.subject].push(q);
					}
				});

				const rootKey = rootNode[0].key;
				let currentKey = rootKey;
				const nodes = rootNode.concat(Object.keys(subjects).map(s => new Object({
					key: ++currentKey,
					text: s,
					color: colors[Math.floor(Math.random() * (colors.length - 1))],
					link: "../" + subjects[s][0].url.split("#")[0]
				})));


				const links = nodes.filter(n => n.key > rootKey).map(n => new Object({from: rootKey, to: n.key, color: "#939393"}));
		*/

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