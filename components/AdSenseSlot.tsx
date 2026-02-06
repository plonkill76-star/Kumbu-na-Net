
import React, { useEffect } from 'react';

interface AdSenseSlotProps {
  client?: string;
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: 'true' | 'false';
}

const AdSenseSlot: React.FC<AdSenseSlotProps> = ({ 
  client = "ca-pub-0000000000000000", 
  slot, 
  format = 'auto', 
  responsive = 'true' 
}) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <div className="my-8 flex justify-center overflow-hidden bg-slate-900/20 rounded-xl p-4 border border-slate-800">
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client={client}
           data-ad-slot={slot}
           data-ad-format={format}
           data-full-width-responsive={responsive}></ins>
    </div>
  );
};

export default AdSenseSlot;
