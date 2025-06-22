import { getDomainName } from "../utilities";

function LinkRenderer ({value: url}: {value: string}) {
  return (
    url && (
      <a href={url} target="_blank">{getDomainName(url)}</a>
    )
  );
};

export default LinkRenderer;
