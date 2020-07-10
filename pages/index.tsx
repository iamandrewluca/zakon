import Head from "next/head";
import { Pane, Button, Dialog, AddIcon, BadgeIcon } from "evergreen-ui";
import useSWR from "swr";
import { useState, Fragment } from "react";
import useSound from "use-sound";
import { FiltersDialog } from "@zakon/shared/filters.dialog";
import { useLegisData } from "@zakon/shared/use-legis-data.hook";

export default function Home() {
  const [showFilters, setShowFilters] = useState(false);
  const [play] = useSound("/click.mp3");
  const legisData = useLegisData();

  return (
    <Fragment>
      <Head>
        <title>Zakon!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        height="100vh"
        background="tint1"
      >
        <AddIcon color="#E4E7EB" size={60} marginBottom={20} />
        <Button
          onClick={() => {
            play();
            setShowFilters(true);
          }}
        >
          Add some filters
        </Button>
        <FiltersDialog
          isShown={showFilters}
          onClose={() => setShowFilters(false)}
          legisData={legisData}
        />
      </Pane>
    </Fragment>
  );
}
