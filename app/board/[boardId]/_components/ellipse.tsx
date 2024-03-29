import { colorToCss } from "@/lib/utils";
import { EllipseLayer } from "@/types/canvas";

interface EllipseProps {
  id: string;
  layer: EllipseLayer;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

export const Ellipse = ({
  id,
  layer,
  onLayerPointerDown,
  selectionColor,
}: EllipseProps) => {
  return (
    <ellipse
      className="drop-shadow-md"
      onPointerDown={(e) => onLayerPointerDown(e, id)}
      style={{
        transform: `translate(
            ${layer.x}px, 
            ${layer.y}px
            )`,
      }}
      cx={layer.width / 2}
      cy={layer.height / 2}
      rx={layer.width / 2}
      ry={layer.height / 2}
      strokeWidth={1}
      fill={layer.fill ? colorToCss(layer.fill) : "#000"}
      stroke={selectionColor || "transparent"}
    />
  );
};
