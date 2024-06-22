"use client"
import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

const MeetingSetup = ({setIsSetupComplete}:{
    setIsSetupComplete: (value:boolean) => void
}) => {
    const call = useCall()
    const [isMicCamToggled, setIsMicCamToggled] = useState(false);

    if(!call){
        throw new Error ("Use cal must be used within Stream call com")
    }
    useEffect(() => {
      if (isMicCamToggled) {
        call?.camera.disable();
        call?.microphone.disable();
      } else {
        call?.camera.enable();
        call?.microphone.enable();
      }
    }, [isMicCamToggled, call?.camera, call?.microphone]);
    return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
        <h1 className="text-2xl font-bold">Setup</h1>
        <VideoPreview />
        <div className="flex h-16 items-center justify-center gap-3">

            <label htmlFor="setup" className='flex items-center justify-center
            gap-2 font-medium'>
            <input type="checkbox" checked={isMicCamToggled}
                onChange={(e)=> setIsMicCamToggled(e.target.checked)} />
            Join with mic and Camera off
            </label>
            <DeviceSettings />
            <Button className='bg-green-500 rounded-md px-4 py-2.5'
            onClick={()=>{
                call.join(); 
                setIsSetupComplete(true);
            }} >
            join Meeting
            </Button>
        </div>
    </div>
  )
}

export default MeetingSetup