import { useGetMachines } from "@/modules/machines/hooks/api/use-get-machines";

export function useBestSellingLocationType() {
  const { data } = useGetMachines();

  console.log(data)
}