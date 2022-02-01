import { IDragons } from "@/view-models/IDragons";
import { Api } from "@/providers/index";

const getAll = () => Api.get<IDragons[]>("v1/dragon");

const deleteDragon = (id: string) => Api.delete<IDragons>(`v1/dragon/${id}`);

const createDragon = (item: IDragons) => Api.post<IDragons>("v1/dragon/", item);

const updateDragon = (item: IDragons) =>
  Api.put<IDragons>(`v1/dragon/${item.id}`, item);

const getById = (id: string) => Api.get<IDragons>(`v1/dragon/${id}`);

export const DragonService = {
  getAll,
  deleteDragon,
  createDragon,
  getById,
  updateDragon,
};
