export function extractSegmentURL(path: string) {
	if (!path) return "";
	if (path === "/") return null;
	return path.split("/")[1];
}
