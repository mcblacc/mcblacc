import React, { useLayoutEffect, useRef } from 'react';
import { PushIn } from 'pushin';
import { ArrowDownCircleOutline } from 'react-ionicons';

export default function Jref() {
//   const pushInContainer = useRef();

//   useLayoutEffect(() => {
//     const pushIn = new PushIn(pushInContainer.current);
//     pushIn.start();

//     return () => pushIn.destroy();
//   });

  return (
    <div className='jref'>
        <div className="artx">
            <div>
                <div className='large-txa'>Meet your perfect <br />Software Partner.</div>
                <br />
                <ArrowDownCircleOutline width="100" color="#ffffff" />
            </div>
        </div>
    </div>
  );
}