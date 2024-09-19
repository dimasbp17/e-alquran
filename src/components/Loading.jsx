import { Spinner } from '@material-tailwind/react';
import React from 'react';

const Loading = () => {
  return (
    <>
      <div>
        <Spinner className="size-10" />
      </div>
    </>
  );
};

export default Loading;
