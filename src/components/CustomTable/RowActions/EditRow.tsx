import { Pencil } from "@phosphor-icons/react";
import { ClientDataType } from "../columns_client";
import { Modal, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Card from "../Cards/Card";

type Props = {
  row: ClientDataType;
};

function EditRow({ row }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Pencil
        key={row.key}
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
        <Card method="Modifier" type="Client" id={row.key} />
      </Modal>
    </>
  );
}

export default EditRow;
