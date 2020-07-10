import Head from "next/head";
import { Pane, Button, Dialog, AddIcon } from "evergreen-ui";
import { useState } from "react";
import useSound from "use-sound";

export default function Home() {
  const [showFilters, setShowFilters] = useState(false);
  const [play] = useSound("/click.mp3");

  return (
    <React.Fragment>
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
        <Dialog
          isShown={showFilters}
          title="Filters"
          onCloseComplete={() => setShowFilters(false)}
          confirmLabel="Save"
        >
          This can be replaced with a side sheet. Vel perspiciatis
          necessitatibus nesciunt voluptatem facere. Minima exercitationem nam
          incidunt unde voluptatum sit sit. Quo aspernatur nisi quos sint
          molestiae commodi voluptatibus. Iure dolore qui et quo dolorem autem.
          Natus et sed voluptatem eaque quaerat veritatis aliquam. Maxime
          consequatur accusamus animi. Quo corporis alias libero quaerat
          pariatur consequatur. Pariatur expedita ea iusto atque voluptas vel
          dolorem. Quia nesciunt velit saepe et maiores omnis autem animi. Sed
          at id officiis aut. Nulla dolorem provident omnis eius aliquam.
          Aspernatur occaecati a possimus quibusdam est voluptates et eveniet.
          Corporis est sunt omnis. Fugit qui ea minus ipsum. Molestias ipsam est
          et eos quisquam consectetur. Neque odio consequuntur officiis
          pariatur. Labore quia unde dolores odio. Et saepe quisquam voluptas
          voluptas accusamus rerum aspernatur. Necessitatibus quis odio et sint
          possimus omnis. Cum ea rerum occaecati occaecati. Et maiores at ea
          est. Porro distinctio qui quisquam. Eveniet voluptatem accusantium
          consequatur enim quae sunt. Vel perspiciatis necessitatibus nesciunt
          voluptatem facere. Minima exercitationem nam incidunt unde voluptatum
          sit sit. Quo aspernatur nisi quos sint molestiae commodi voluptatibus.
          Iure dolore qui et quo dolorem autem. Natus et sed voluptatem eaque
          quaerat veritatis aliquam. Maxime consequatur accusamus animi. Quo
          corporis alias libero quaerat pariatur consequatur. Pariatur expedita
          ea iusto atque voluptas vel dolorem. Quia nesciunt velit saepe et
          maiores omnis autem animi. Sed at id officiis aut. Nulla dolorem
          provident omnis eius aliquam. Aspernatur occaecati a possimus
          quibusdam est voluptates et eveniet. Corporis est sunt omnis. Fugit
          qui ea minus ipsum. Molestias ipsam est et eos quisquam consectetur.
          Neque odio consequuntur officiis pariatur. Labore quia unde dolores
          odio. Et saepe quisquam voluptas voluptas accusamus rerum aspernatur.
          Necessitatibus quis odio et sint possimus omnis. Cum ea rerum
          occaecati occaecati. Et maiores at ea est. Porro distinctio qui
          quisquam. Eveniet voluptatem accusantium consequatur enim quae sunt.
        </Dialog>
      </Pane>
    </React.Fragment>
  );
}
