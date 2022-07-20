export const query = (obj) => {
  const { labels, keyword, language, state, updated } = obj;
  const labelString = (labels || [])
    .map(({ name }) => `label:"${name}"`)
    .join(" ");
  const keywordString = keyword ? `${keyword}` : "";
  const languageString = language ? `language:${language}` : "";
  const stateString = state ? `state:${state}` : "";
  const updatedString = updated ? `updated:>${updated}` : "";
  const queryString = `${labelString} ${keywordString} ${languageString} ${stateString} ${updatedString}`;
  return queryString;
};

export const CONSTANTS = {
  COLLECTION_NAME: "issues",
  DEFAULT_QUERY:
    'label:"good first issue" language:JavaScript updated:>2021-12-01 state:open',
};
