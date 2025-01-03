import { useLoginMutation } from '../../_entities/api/mutation';
import { useMount } from '@/hooks/useMount';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export const withAuthentication = <P extends object>(Component: React.ComponentType<P>) => {
  const WrappedComponent: React.FC<P> = (props) => {
    const { mutate: login } = useLoginMutation();
    const isMounted = useMount();
    const authCode = useSearchParams().get('code') || '';

    useEffect(() => {
      if (isMounted) login(authCode);
    }, [isMounted, authCode, login]);

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withAuthentication(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
};
