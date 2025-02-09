import { useState } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";

function Comparison() {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className="flex flex-col gap-4 mt-12 rounded-2xl">
      <div className="w-full">
        <div
          className="relative aspect-video w-full h-full overflow-hidden  select-none"
          onMouseMove={onMouseMove}
          onMouseUp={() => setOnMouseDown(false)}
          onTouchMove={onMouseMove}
          onTouchEnd={() => setOnMouseDown(false)}
        >
          <div
            className="bg-muted h-full w-1 absolute z-20 top-0 -ml-1 select-none"
            style={{
              left: inset + "%",
            }}
          >
            <button
              className="bg-[#DC2626] text-neutral-50 rounded hover:scale-110 transition-all w-5 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-2 z-30 cursor-ew-resize flex justify-center items-center"
              onTouchStart={(e) => {
                setOnMouseDown(true);
                onMouseMove(e);
              }}
              onMouseDown={(e) => {
                setOnMouseDown(true);
                onMouseMove(e);
              }}
              onTouchEnd={() => setOnMouseDown(false)}
              onMouseUp={() => setOnMouseDown(false)}
            >
              <GripVertical className="h-4 w-4 select-none" />
            </button>
          </div>
          <Image
            src="/brands/brand-4.jpg"
            alt="feature8"
            width={1920}
            height={1080}
            priority
            className="absolute left-0 top-0 z-10 w-full h-full aspect-video rounded-md select-none "
            style={{
              clipPath: "inset(0 0 0 " + inset + "%)",
            }}
          />
          <Image
            src="/threads/thread-1.jpg"
            alt="darkmode-feature8.png"
            width={1920}
            height={1080}
            priority
            className="absolute left-0 top-0 w-full z-0 h-full aspect-video rounded-md select-none "
          />
        </div>
      </div>
    </div>
  );
}

export { Comparison };
