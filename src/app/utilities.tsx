export const getDomainName = (archiveDotOrgUrl: string) => {
  // Match the domain name from an archive.org URL that looks like this:
  //   https://web.archive.org/web/20190209174006/http://registertovote.ca.gov/
  // The target URL can use http or https.
  const re = /\/http[s]{0,1}:\/\/([a-zA-Z0-9-.]{1,61})/

  const matchArray = archiveDotOrgUrl.match(re)
  const domainMatchGroup = matchArray[1]
  return domainMatchGroup
}

export function getApi(apiUrl) {
  const data = fetch(apiUrl)
    .then((response) => response.json())
    .catch((err) => console.error(err))
  return data;
}
