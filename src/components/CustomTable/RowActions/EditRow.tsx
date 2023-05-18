import { Pencil } from "@phosphor-icons/react";
import { Modal, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Client, Items } from "@/helpers/types";
import Card from "@compo/CustomTable/Cards/Card";
type Props = {
  row: Client | Items;
};

function EditRow({ row }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Pencil
        key={row._id}
        onClick={() => {
          open();
          // dispatch(fetchData());
        }}
        size={24}
        color="#2d96ff"
      />

      <Modal
        opened={opened}
        onClose={close}
        centered
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <Card method="Modifier" type="Client" id={row._id} />
      </Modal>
    </>
  );
}

export default EditRow;
