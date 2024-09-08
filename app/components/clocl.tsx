"use client";
import React from 'react';
import useLiveDate from '@/app/hooks/liveDate'; // Import the hook

const Clock = () => {
  const now = useLiveDate();
  const h = now.getHours();
  let m = now.getMinutes();
  const s = now.getSeconds();

  // Pad minutes and seconds with a leading zero if necessary
  const formattedMinutes = m < 10 ? `0${m}` : m;
  const formattedSeconds = s < 10 ? `0${s}` : s;
  const formattedHours = s < 10 ? `0${h}` : h;
  return (
    <div>
      <div>{h.toString()}:{formattedMinutes.toString()}:{formattedSeconds.toString()}</div>
    </div> 
  );
};

export default Clock;
