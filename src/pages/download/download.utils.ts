/**
* Starts the download of a file from a URL
* @param url - URL of the file to download
* @param fileName - Name with which the file will be saved
*/
export function downloadFile(url: string, fileName: string): void {
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
