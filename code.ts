// Define the type for a Figma node
type FigmaNode = SceneNode & { height: number; y: number; };

const { currentPage } = figma;
const { selection } = currentPage;

// Function to clone and reposition a single node
function cloneAndReposition(node: FigmaNode): FigmaNode {
  const clone = node.clone() as FigmaNode;
  clone.y += node.height + 100;
  return clone;
}

if (selection.length === 0) {
  figma.closePlugin("No elements selected. Please select one or more elements to clone.");
} else {
  const clones: FigmaNode[] = [];

  for (const node of selection) {
    // Check if the node is a component or a component set (variant)
    if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
      clones.push(cloneAndReposition(node as FigmaNode));
    }
  }

  if (clones.length === 0) {
    figma.closePlugin("Invalid selection. Only components or component sets (variants) can be cloned.");
  } else {
    currentPage.selection = clones;
    figma.viewport.scrollAndZoomIntoView(clones);
    figma.closePlugin('Elements cloned successfully.');
  }
}
