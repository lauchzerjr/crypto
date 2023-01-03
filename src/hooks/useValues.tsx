import { useContext } from "react";

import { ValuesContext, ValuesContextDataProps } from '../contexts/ValuesContext'

export function useValues(): ValuesContextDataProps {
  const context = useContext(ValuesContext)

  return context;
}