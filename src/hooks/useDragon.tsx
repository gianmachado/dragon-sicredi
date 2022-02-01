import { DragonService } from "@/services/DragonService";
import { IDragons } from "@/view-models/IDragons";
import { useCallback, useState } from "react";
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
    try {
      const { status, data } = await DragonService.getAll();

      if (status !== 200) swalAlert(status);

      setDragons(data);
    } catch (e) {
      swalAlert(404);
    }
  }, []);

  const createDragon = useCallback(async (item: IDragons) => {
    try {
      if (!item.name)
        throw Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Name is required!",
        });
      else if (!item.type)
        throw Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Type is required!",
        });

      if (!item.createdAt) item.createdAt = new Date();
      var date = new Date(item.createdAt);
      date.setDate(date.getDate() + 1);

      item.createdAt = date;

      const { status } = await DragonService.createDragon(item);

      swalAlert(status);

      return status;
    } catch (e) {
      swalAlert(404);
    }
  }, []);

  const updateDragon = useCallback(async (item: IDragons) => {
    try {
      if (!item.name)
        throw Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Name is required!",
        });
      else if (!item.type)
        throw Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Type is required!",
        });

      if (!item.createdAt) item.createdAt = new Date();
      var date = new Date(item.createdAt);
      date.setDate(date.getDate() + 1);

      item.createdAt = date;

      const { status } = await DragonService.updateDragon(item);

      swalAlert(status);

      return status;
    } catch (error) {
      swalAlert(404);
    }
  }, []);

  const deleteDragon = useCallback(
    async (id: string) => {
      try {
        const { status } = await DragonService.deleteDragon(id);
        await getAll();

        swalAlert(status);
      } catch (error) {
        swalAlert(404);
      }
    },
    [getAll]
  );

  const getById = useCallback(async (id: string) => {
    try {
      const { status, data } = await DragonService.getById(id);

      if (status !== 200) swalAlert(status);

      return data;
    } catch (error) {
      swalAlert(404);
    }
  }, []);

  return {
    getAll,
    dragons,
    deleteDragon,
    createDragon,
    getById,
    updateDragon,
  };
};
