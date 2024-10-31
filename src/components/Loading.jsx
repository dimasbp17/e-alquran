import { Spinner } from '@material-tailwind/react';
import React from 'react';

const Loading = () => {
  return (
    <>
      <div>
        <Spinner
          className="size-10 lg:size-12"
          color="yellow"
        />
      </div>
    </>
  );
};

export default Loading;
