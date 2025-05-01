import { cn } from "@/lib/utils";

interface DottedSeparatorProps{
  className?:string;
  color?:string;
  height?:string;
  dotSize?:string;
  gapSize?:string;
  direction?:"horizontal" | "vertical";
};

export const DottedSeparator =({
  className,
  color="#d4d4d8",
  height="2px",
  dotSize="2px",
  gapSize="6px",
  direction="horizontal"
}:DottedSeparatorProps)=>{
  const isHorizontal = direction==="horizontal";
  const dot = parseInt(dotSize.replace("px", ""));
  const gap = parseInt(gapSize.replace("px", ""));

  return(
    <div className={cn(
      isHorizontal ? "w-full flex items-center" : "h-full flex flex-col items-center",
      className,
    )}>
      <div
        className={isHorizontal ? "flex-grow" : "flex-grow-0"}
        style={{
          width: isHorizontal ? "100%" : height,
          height: isHorizontal ? height : "100%",
          backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
          backgroundSize: isHorizontal
            ? `${dot + gap}px ${height}`
            : `${height} ${dot + gap}px`,
          backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
          backgroundPosition: "center",
        }}
        
      />

    </div>
  )
}