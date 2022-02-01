import { IDragons } from "@/view-models/IDragons";
import { Api } from "src/providers";

const getAll = () => Api.get<IDragons[]>("v1/dragon");

const deleteDragon = (id: string) => Api.delete<IDragons>(`v1/dragon/${id}`);

const createDragon = (item: IDragons) => Api.post<IDragons>("v1/dragon/", item);

export const DragonService = {
  getAll,
  deleteDragon,
  createDragon,
};
