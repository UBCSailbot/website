'use client';

/* Core */
import { Provider } from 'react-redux';

/* Instruments */
import { reduxStore } from '@/lib/redux';

export const Providers = (props: React.PropsWithChildren) => {
  // this works very well
  return <Provider store={reduxStore}>{props.children}</Provider>;
};
