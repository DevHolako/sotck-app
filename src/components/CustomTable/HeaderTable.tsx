import { PlusCircle } from "@phosphor-icons/react";
import { Modal, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Card from "./Cards/Card";

type Props = {
  type: "Client" | "Stock";
};

function HeaderTable({ type }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <div className="table-header">
      <span className="table-title">{`${type} Table`}</span>
      <PlusCircle
        className="ico"
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
        <Card method="Ajouter" type={type} />
      </Modal>
    </div>
  );
}

export default HeaderTable;
