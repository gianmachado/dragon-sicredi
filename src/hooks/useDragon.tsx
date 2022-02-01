import { IDragons } from "@/view-models/IDragons";
import { useCallback, useState } from "react";
import { DragonService } from "src/services/DragonService";
import Swal from "sweetalert2";

export const useDragon = () => {
  const [dragons, setDragons] = useState<IDragons[]>();

  const swalAlert = (status: number) => {
    if (status === 200 || status === 201) {
      return Swal.fire({
        icon: "success",
        title: "Great!",
        text: "Everything OK...",
      });
    }

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  };

  const getAll = useCallback(async () => {
    const { status, data } = await DragonService.getAll();

    if (status !== 200) swalAlert(status);

    setDragons(data);
  }, []);

  const createDragon = useCallback(async () => {
    const item: IDragons = {
      createdAt: new Date(),
      name: "Charizard",
      type: "Fogo",
      histories: "The biggest dragon ever",
      id: Math.trunc(Math.random() * 100).toString(),
    };

    const { status } = await DragonService.createDragon(item);
    await getAll();

    swalAlert(status);
  }, [getAll]);

  const deleteDragon = useCallback(
    async (id: string) => {
      const { status } = await DragonService.deleteDragon(id);
      await getAll();

      swalAlert(status);
    },
    [getAll]
  );

  return {
    getAll,
    dragons,
    deleteDragon,
    createDragon,
  };
};
