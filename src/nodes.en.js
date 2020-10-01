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
			text: "Solution hypothesis in Product Backlog",
			type: "product",
			link: "https://www.scrum.org/resources/what-is-a-product-backlog"
		},
		{
			key: 3,
			text: "Sprint Backlog",
			type: "process",
			link: "https://www.scrum.org/resources/what-is-a-sprint-backlog"
		},
		{
			key: 4,
			text: "Sprint Goal",
			type: "process",
			link: "https://www.scrum.org/pathway/product-owner-learning-path/understanding-and-applying-the-scrum-framework/sprint-goal"
		},
		{
			key: 5,
			text: "Timeboxes",
			type: "process",
			link: "https://en.wikipedia.org/wiki/Timeboxing"
		},
		{
			key: 6,
			text: "WIP Limit and pull system",
			type: "process",
			link: "https://less.works/less/principles/continuous-improvement-towards-perfection.html#WorkTowardFlow"
		},
		{
			key: 7,
			text: "Overburden",
			type: "process",
			link: "https://less.works/less/principles/continuous-improvement-towards-perfection.html#ValueandWaste"
		},
		{
			key: 8,
			text: "Customer Recognizable Feature",
			type: "process",
			link: "https://less.works/less/principles/continuous-improvement-towards-perfection.html#ValueandWaste"
		},
		{
			key: 9,
			text: "Focus",
			type: "process",
			link: "https://guntherverheyen.com/2013/05/03/theres-value-in-the-scrum-values/"
		},
		{
			key: 10,
			text: "Value-based splitting",
			type: "process",
			link: "https://agileforall.com/resources/how-to-split-a-user-story/"
		},
		{
			key: 11,
			text: "Reflection",
			type: "process",
			link: "https://www.scrum.org/resources/what-is-a-sprint-retrospective"
		},
		{
			key: 12,
			text: "Acceptance testing",
			type: "process",
			link: "https://less.works/less/technical-excellence/acceptance-testing"
		},
		{
			key: 13,
			text: "Estimation Accuracy",
			type: "process",
			link: "https://www.scrum.org/resources/suggested-reading-professional-scrum-kanban"
		},
		{
			key: 14,
			text: "Continuous Learning",
			type: "process",
			link: "https://less.works/less/principles/continuous-improvement-towards-perfection"
		},
		{
			key: 15,
			text: "Cross-functionality",
			type: "process",
			link: "https://less.works/less/structure/feature-teams"
		},
		{
			key: 16,
			text: "Self-organization",
			type: "process",
			link: "https://less.works/less/management/self-managing-teams"
		},
		{
			key: 17,
			text: "Servant leadership",
			type: "process",
			link: "https://www.scrum.org/resources/what-is-a-scrum-master"
		},
		{
			key: 18,
			text: "Infrastructure as a Code",
			type: "technical",
			link: "https://en.wikipedia.org/wiki/Infrastructure_as_code"
		},
		{
			key: 19,
			text: "Deployment automation",
			type: "technical",
			link: "https://en.wikipedia.org/wiki/Continuous_integration#automate-deployment"
		},
		{
			key: 20,
			text: "Build automation",
			type: "technical",
			link: "https://en.wikipedia.org/wiki/Build_automation"
		},
		{
			key: 21,
			text: "Continuous Deployment",
			type: "technical",
			link: "https://en.wikipedia.org/wiki/Continuous_deployment"
		},
		{
			key: 22,
			text: "Continuous Integration",
			type: "technical",
			link: "https://less.works/less/technical-excellence/continuous-integration"
		},
		{
			key: 23,
			text: "Continuous Delivery",
			type: "technical",
			link: "https://less.works/less/technical-excellence/continuous-delivery"
		},
		{
			key: 24,
			text: "Acceptance test automation",
			type: "technical",
			link: "https://less.works/less/technical-excellence/test-automation"
		},
		{
			key: 25,
			text: "Collective code ownership",
			type: "technical",
			link: "https://martinfowler.com/bliki/CodeOwnership.html"
		},
		{
			key: 26,
			text: "Clean code",
			type: "technical",
			link: "https://less.works/less/technical-excellence/clean-code"
		},
		{
			key: 27,
			text: "Test-driven development",
			type: "technical",
			link: "https://less.works/less/technical-excellence/test-driven-development"
		},
		{
			key: 28,
			text: "Coding standard",
			type: "technical",
			link: "https://en.wikipedia.org/wiki/Extreme_programming_practices#Coding_standard"
		},
		{
			key: 29,
			text: "Clean Architecture",
			type: "technical",
			link: "https://less.works/less/technical-excellence/architecture-design"
		},
		{
			key: 30,
			text: "Sustainable pace",
			type: "product",
			link: "https://en.wikipedia.org/wiki/Extreme_programming_practices#Sustainable_pace"
		},
		{
			key: 31,
			text: "Short feedback loops",
			type: "product",
			link: "https://less.works/less/principles/empirical-process-control"
		},
		{
			key: 32,
			text: "One-Piece Continuous Flow",
			type: "process",
			link: "https://sites.google.com/a/scrumplop.org/published-patterns/product-organization-pattern-language/development-team/swarming--one-piece-continuous-flow"
		},
		{
			key: 100,
			text: "Customer",
			type: "product",
			link: "https://less.works/less/principles/customer-centric"
		},
		{
			key: 101,
			text: "Working solution",
			type: "product",
			link: "https://www.scrum.org/resources/what-is-an-increment"
		},
		{
			key: 102,
			text: "Modern product practices",
			type: "product",
			link: "https://www.scrum.org/resources/suggested-reading-professional-scrum-product-owner-II"
		}
	],
	links: [
		{
			from: 1,
			to: 2,
			text: "spawns",
			type: "solid"
		},
		{
			from: 2,
			to: 3,
			text: "(top) is reflected in",
			type: "solid"
		},
		{
			from: 2,
			to: 4,
			text: "is formulated in",
			type: "solid"
		},
		{
			from: 5,
			to: 3,
			text: "enables",
			type: "solid"
		},
		{
			from: 3,
			to: 6,
			text: "is based on",
			type: "solid"
		},
		{
			from: 6,
			to: 7,
			text: "eliminates",
			type: "solid"
		},
		{
			from: 3,
			to: 8,
			text: "consists of",
			type: "solid"
		},
		{
			from: 4,
			to: 9,
			text: "encourages",
			type: "solid"
		},
		{
			from: 8,
			to: 10,
			text: "enables",
			type: "solid"
		},
		{
			from: 7,
			to: 11,
			text: "is lower, that enables",
			type: "solid"
		},
		{
			from: 9,
			to: 14,
			text: "improves",
			type: "solid"
		},
		{
			from: 10,
			to: 12,
			text: "improves",
			type: "solid"
		},
		{
			from: 10,
			to: 13,
			text: "improves",
			type: "solid"
		},
		{
			from: 11,
			to: 14,
			text: "drives",
			type: "solid"
		},
		{
			from: 12,
			to: 13,
			text: "improves",
			type: "solid"
		},
		{
			from: 14,
			to: 13,
			text: "improves",
			type: "solid"
		},
		{
			from: 14,
			to: 15,
			text: "improves",
			type: "solid"
		},
		{
			from: 14,
			to: 16,
			text: "improves",
			type: "solid"
		},
		{
			from: 15,
			to: 30,
			text: "improves",
			type: "solid"
		},
		{
			from: 16,
			to: 31,
			text: "increases",
			type: "solid"
		},
		{
			from: 17,
			to: 16,
			text: "inspires",
			type: "solid"
		},
		{
			from: 5,
			to: 16,
			text: "crates back-pressure",
			type: "solid"
		},
		{
			from: 18,
			to: 21,
			text: "improves",
			type: "solid"
		},
		{
			from: 19,
			to: 21,
			text: "enables",
			type: "solid"
		},
		{
			from: 20,
			to: 22,
			text: "enables",
			type: "solid"
		},
		{
			from: 100,
			to: 1,
			text: "has",
			type: "solid"
		},
		{
			from: 12,
			to: 24,
			text: "enables",
			type: "solid"
		},
		{
			from: 21,
			to: 23,
			text: "enables",
			type: "solid"
		},
		{
			from: 22,
			to: 21,
			text: "empowers",
			type: "solid"
		},
		{
			from: 23,
			to: 31,
			text: "increases",
			type: "solid"
		},
		{
			from: 25,
			to: 15,
			text: "improves",
			type: "solid"
		},
		{
			from: 25,
			to: 26,
			text: "enables",
			type: "solid"
		},
		{
			from: 25,
			to: 28,
			text: "enables",
			type: "solid"
		},
		{
			from: 27,
			to: 22,
			text: "enables",
			type: "solid"
		},
		{
			from: 27,
			to: 26,
			text: "enables",
			type: "solid"
		},
		{
			from: 26,
			to: 29,
			text: "enables",
			type: "solid"
		},
		{
			from: 28,
			to: 29,
			text: "enables",
			type: "solid"
		},
		{
			from: 29,
			to: 31,
			text: "improves",
			type: "solid"
		},
		{
			from: 31,
			to: 101,
			text: "improves",
			type: "solid"
		},
		{
			from: 32,
			to: 6,
			text: "is based on",
			type: "solid"
		},
		{
			from: 32,
			to: 9,
			text: "encourages",
			type: "solid"
		},
		{
			from: 101,
			to: 100,
			text: "earns value, because satisfies",
			type: "solid"
		},
		{
			from: 101,
			to: 2,
			text: "proves or denies",
			type: "solid"
		},
		{
			from: 102,
			to: 2,
			text: "empowers",
			type: "solid"
		}
	]

}