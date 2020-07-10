import useSWR from "swr";

export const useLegisData = () => ({
  searchType: useSWR("/api/legis/search_type/getlist", legisFetcher),
  documentStatus: useSWR("/api/legis/document_status/getlist", legisFetcher),
  publicationStatus: useSWR(
    "/api/legis/publication_status/getlist",
    legisFetcher
  ),
  emitent: useSWR("/api/legis/emitent/getlist", legisFetcher),
  tip: useSWR("/api/legis/tip/getlist", legisFetcher),
});

/**
 * This fetcher will cache requested data for on day
 * otherwise legis.md may ban us
 */
async function legisFetcher(legisNextUrl: string) {
  const fromStorage = localStorage.getItem(legisNextUrl);
  const fromStorageData = fromStorage ? JSON.parse(fromStorage) : null;
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const now = Date.now();

  if (fromStorageData && now - fromStorageData.date < oneDayInMilliseconds) {
    return fromStorageData.data.results;
  }

  const res = await fetch(legisNextUrl);
  const json = await res.json();
  const toStorage = JSON.stringify({
    date: now,
    data: json,
  });

  localStorage.setItem(legisNextUrl, toStorage);
  return json.results;
}
