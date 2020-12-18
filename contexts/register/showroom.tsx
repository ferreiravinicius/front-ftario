import React, { createContext } from "react";
import { GenusOutput } from "../../service/genus";

export interface GenusForm {
  id: number;
  name: string;
}

export interface SpecieForm {
  id?: number;
  name: string;
  genus: GenusForm;
}

export interface AquaticPlantForm {
  id?: number;
  specie: SpecieForm;
  variety?: string;
}

export interface RegisterPlantContextProps {
  loading: boolean;
  toggleLoading: (value: boolean) => void;
  formGenus: GenusForm;
  setFormGenus: (genus: GenusForm) => void
}

const defaultContextProps = {
  loading: false,
  toggleLoading: (_: boolean) => { throw Error(`Need to implement!`) },
  formGenus: {} as GenusForm,
  setFormGenus: (_: GenusForm) => { throw Error(`Need to implement!`) },
};

const RegisterPlantContext = createContext<RegisterPlantContextProps>(
  defaultContextProps
);

export const RegisterPlantProvider: React.FC = ({ children }) => {

  // const defaultFormPlant = {} as AquaticPlantForm
  // const [formPlant, setFormPlant] = React.useState<AquaticPlantForm>(defaultFormPlant);

  const defaultFormGenus = {} as GenusForm

  const [loading, toggleLoading] = React.useState<boolean>(false);
  const [formGenus, setFormGenus] = React.useState<GenusForm>(defaultFormGenus);

  const contextProps = {
    loading,
    toggleLoading,
    formGenus,
    setFormGenus,
  };

  return (
    <RegisterPlantContext.Provider value={contextProps}>
      {children}
    </RegisterPlantContext.Provider>
  );
};

export default RegisterPlantContext;
