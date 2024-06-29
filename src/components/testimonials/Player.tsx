import Image from "next/image";
import PlayerIcon from "../icons/PlayerIcon";
import AudioIcon from "../icons/AudioIcon";

export default function Player() {
  return (
    <div className="h-[100px] rounded-sm p-8 gap-10 flex items-center bg-[#CCC1DA] ">
      <div className="bg-white flex gap-2 justify-center items-center w-10 h-10 rounded-full">
        <PlayerIcon />
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#8064A2] rounded-full "></div>
          <div className="w-[468px] h-[2px] bg-white"></div>
        </div>
        <div className="text-purple text-xs">0:00</div>
      </div>
      <div className="relative rounded-full w-15 h-15 bg-gray-500 ">
        <Image
          className="rounded-full"
          width={60}
          height={60}
          alt="dancer"
          src="/dancer.png"
        />
        <div className="absolute bottom-1 -left-2">
          <AudioIcon />
        </div>
      </div>
    </div>
  );
}
