import {create} from "zustand/react";
export const useSearchStore = create((set):{item: string,setItem:(state:string) =>string } => (
{
item: '',
setItem: (state:string) => set({item: state})
}))

