import { Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ShortUrlRedirect() {
  const { urlCode } = useParams();
  const serverBaseUrl = import.meta.env.VITE_APP_URI;

  const redirect = () => {
    let url = (serverBaseUrl + `/${urlCode}`);
    window.location.replace(url);
  };

  useEffect(() => {
    if (urlCode) {
      redirect();
    }
  }, [ urlCode ]);
  return (
    <div>
      <Heading as="h3" size="xl" m={ '3% 0% 2% 0%' }>
        Redirecting...
      </Heading>
    </div>
  );
}
