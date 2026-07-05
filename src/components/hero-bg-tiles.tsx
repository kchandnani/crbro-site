import Image from "next/image";

const mobileTiles = [
  { src: "/images/dj-sets/img_f86adbcf6551.jpg", w: 160, h: 120, top: "3%", left: "5%" },
  { src: "/images/dj-sets/img_d6f876cdb2ff.jpg", w: 140, h: 105, top: "20%", right: "5%" },
  { src: "/images/dj-sets/img_6b2939e5c14f.jpg", w: 130, h: 170, top: "55%", left: "3%" },
  { src: "/images/dj-sets/img_240ced9604a7.jpg", w: 150, h: 110, top: "70%", right: "8%" },
  { src: "/images/dj-sets/img_62c789445369.jpg", w: 120, h: 90, top: "5%", left: "55%" },
  { src: "/images/dj-sets/img_671e6f9273dc.jpg", w: 140, h: 180, top: "40%", left: "60%" },
  { src: "/images/dj-sets/img_1055369770c2.jpg", w: 120, h: 160, top: "75%", left: "35%" },
];

const desktopTiles = [
  { src: "/images/dj-sets/img_f86adbcf6551.jpg", w: 400, h: 300, top: "3%", left: "6%" },
  { src: "/images/dj-sets/img_d6f876cdb2ff.jpg", w: 340, h: 255, top: "18%", right: "6%" },
  { src: "/images/dj-sets/img_6b2939e5c14f.jpg", w: 300, h: 390, top: "52%", left: "3%" },
  { src: "/images/dj-sets/img_240ced9604a7.jpg", w: 360, h: 270, top: "65%", right: "5%" },
  { src: "/images/dj-sets/img_62c789445369.jpg", w: 280, h: 210, top: "5%", left: "54%" },
  { src: "/images/dj-sets/img_671e6f9273dc.jpg", w: 320, h: 410, top: "32%", left: "70%" },
  { src: "/images/dj-sets/img_1055369770c2.jpg", w: 270, h: 350, top: "72%", left: "35%" },
  { src: "/images/dj-sets/img_a056c6f3c210.jpg", w: 300, h: 225, top: "42%", left: "22%" },
];

function TileGrid({ tiles }: { tiles: typeof desktopTiles }) {
  return (
    <>
      {tiles.map((tile, i) => {
        const deg = i % 2 === 0 ? (i * 3 + 2) : -(i * 3 + 2);
        const style: React.CSSProperties = {
          width: tile.w,
          height: tile.h,
          top: tile.top,
          left: tile.left,
          right: tile.right,
          opacity: 0.13,
          transform: `rotate(${deg}deg)`,
          position: "absolute",
          borderRadius: "4px",
          overflow: "hidden",
        };
        return (
          <div key={tile.src} style={style}>
            <Image src={tile.src} alt="" fill className="object-cover" />
          </div>
        );
      })}
    </>
  );
}

export function HeroBgTiles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="sm:hidden">
        <TileGrid tiles={mobileTiles} />
      </div>
      <div className="hidden sm:block">
        <TileGrid tiles={desktopTiles} />
      </div>
    </div>
  );
}
