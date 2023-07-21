import { Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function RedirectPage() {
  const { urlCode } = useParams();
  const navigate = useNavigate();
  const [ seconds, setSeconds ] = useState(4);
  const countDown = () => {
    setSeconds((prevSeconds) => prevSeconds - 1);
  };

  let countdownInterval;

  useEffect(() => {
    if (seconds === 0) {
      console.log('Countdown finished!');
        navigate('/')
    }
    return () => clearInterval(countdownInterval);

  }, [ seconds ]);

  const redirect = () => {
    console.log({x : 'api called'})
    axios.get(`/${urlCode}`).then().catch(err => {
      countdownInterval = setInterval(countDown, 1000);
    });
  };
  useEffect(() => {
    if (urlCode) {
      redirect();
    }
  }, [ urlCode ]);
  return (
    <div>
      <Heading as="h3" size="xl" m={ '3% 0% 2% 0%' }>
        Failed to redirect! 
        Going back to Home { seconds }
      </Heading>
    </div>
  );
}
