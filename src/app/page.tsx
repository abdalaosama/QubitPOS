import Image from "next/image";
import SolidDiv from "./components/SolidDiv";
import GradDiv from "./components/GradDiv";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-row w-full p-4 gap-4">

        <div className="flex flex-col flex-[3] min-w-[250px] gap-4">
          <SolidDiv className="p-4"> TEST </SolidDiv>
          <GradDiv className="p-4"> TEST </GradDiv>
          <SolidDiv className="p-4"> TEST </SolidDiv>
        </div>
        <div className="flex flex-col flex-[6]">

        </div>
        <div className="flex flex-col flex-[2] max-w-[250px]">

        </div>

      </div>
    </div>
  );
}
