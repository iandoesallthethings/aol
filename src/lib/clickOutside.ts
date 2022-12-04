interface Options {
	clickIn: (node: Node) => boolean | void
	clickOut: (node: Node) => boolean | void
}

const defaultOptions: Options = {
	clickOut: (node: Node) => node.dispatchEvent('out'),
	clickIn: (node: Node) => node.dispatchEvent('in'),
}
export default function clickInOrOut(node: Node, options: Options = defaultOptions) {
	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			options.clickOut(node)
		} else if (node) {
			options.clickIn(node)
		}
	}

	document.addEventListener('click', handleClick, true)

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true)
		},
	}
}
