import { Dialog } from 'evergreen-ui'

export function FiltersDialog({ isShown, onClose, legisData }) {
  const error =
    legisData.searchType.error ||
    legisData.documentStatus.error ||
    legisData.publicationStatus.error ||
    legisData.emitent.error ||
    legisData.tip.error;

  const loading =
    !legisData.searchType.data &&
    !legisData.documentStatus.data &&
    !legisData.publicationStatus.data &&
    !legisData.emitent.data &&
    !legisData.tip.data;

  // console.log(error, loading)

  return (
    <Dialog
      isShown={isShown}
      title="Filters"
      onCloseComplete={onClose}
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
  )
}