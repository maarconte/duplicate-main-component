// Clones the first selected element on the current Figma page.
// Assumes there is at least one element selected.
const clone = figma.currentPage.selection[0].clone();

// Updates the current selection to be the newly cloned element.
figma.currentPage.selection = [clone];

// Scrolls the Figma viewport to the cloned element and zooms in for a better view.
figma.viewport.scrollAndZoomIntoView([clone]);

// Moves the cloned element down by its own height plus an additional 100 units.
// This avoids overlapping with the original element and provides some space between them.
clone.y += clone.height + 100;

// Closes the plugin. This is typically the last line in a Figma plugin script.
// It signals to Figma that the plugin has completed its task.
figma.closePlugin();
