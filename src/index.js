import "bootstrap"
import "./index.scss"

import GoJs from "gojs"

import nodesAndLinks from "./nodes.en"
import MindMap from "./mindmap"

document.getElementById("currentYear").textContent = new Date().getFullYear().toString()


const mindMap = new MindMap(nodesAndLinks)
const goJs = GoJs.GraphObject.make
const nodeTemplate = goJs(GoJs.Node, "Auto", {
	locationSpot: GoJs.Spot.Center
},

goJs(GoJs.Shape, "RoundedRectangle",
	{
		fill: "white",
		portId: "",
		cursor: "pointer",
		fromLinkable: true,
		fromLinkableSelfNode: false,
		fromLinkableDuplicates: false,
		toLinkable: true,
		toLinkableSelfNode: false,
		toLinkableDuplicates: false
	},
	new GoJs.Binding("fill", "color")
),

goJs(GoJs.TextBlock,
	{
		font: "bold 14px Lucida Console",
		cursor: "pointer",
		stroke: "#eee",
		margin: 6,  // make some extra space for the shape around the text
		isMultiline: false,  // don't allow newlines in text
		editable: false  // allow in-place editing by user
	},
	new GoJs.Binding("text", "text").makeTwoWay()
)
)

const linkTemplate = goJs(GoJs.Link,
	goJs(GoJs.Shape, {stroke: "#939393"}),
	goJs(GoJs.Shape, {toArrow: "Standard", stroke: "#939393", fill: "#939393"}),
	goJs(GoJs.TextBlock, {stroke: "#939393"}, new GoJs.Binding("text", "text"))
)


const myDiagram = goJs(GoJs.Diagram, "diagram", {
	layout: goJs(GoJs.ForceDirectedLayout)
})

myDiagram.addDiagramListener("ObjectSingleClicked",
	function (e) {
		if (e.subject.part.jb.link !== undefined) {
			//console.log(e.subject.part.ib.link);
			window.open(e.subject.part.jb.link)
		}
	})

const map = mindMap.getMap()

myDiagram.model = new GoJs.GraphLinksModel(map.nodes, map.links)
myDiagram.nodeTemplate = nodeTemplate
myDiagram.linkTemplate = linkTemplate
//myDiagram.isEnabled = false;

