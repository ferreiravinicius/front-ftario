import api, { ApiResponse } from "./api";

export interface GenusOutput {
  id: number;
  name: string;
}

export interface GenusInput {
  name: string;
}

const registerGenus = async (
  genus: GenusInput
): Promise<ApiResponse<GenusOutput>> => {
  const uri = `/genus`;
  const genusData = JSON.stringify({
    name: genus.name,
  });

  const { status, data } = await api.post(uri, genusData);
  if (status === 201) {
    return { data };
  }

  return { error: { userMessage: data?.userMessage }};
};

const filterGenusByName = async (
  name: string
): Promise<ApiResponse<GenusOutput[]>> => {
  const uri = `/genus/filter`;
  const config = { params: { name } };

  const { status, data } = await api.get(uri, config);

  const success = status === 200;
  if (success) {
    const filtered = data.map((each: any) => ({
      id: each?.id,
      name: each.name,
    }));
    return { data: filtered };
  }

  const error = { userMessage: data?.userMessage };
  return { error };
};

const GenusAPI = {
  filterGenusByName,
  registerGenus,
};

export default GenusAPI;
