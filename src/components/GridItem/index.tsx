import { GridItemType } from "../../types/GridItemType";
import b7Svg from "../../svgs/b7.svg";
import { items } from "../../data/items";
import * as C from "./styles";

type GridProps = {
  item: GridItemType;
  onClick: () => void;
};

export const GridItem = ({ item, onClick }: GridProps) => {
  return (
    <C.Container
      showBackground={item.permanentShown || item.shown}
      onClick={onClick}
    >
      {item.permanentShown === false && item.shown === false && (
        <C.Icon src={b7Svg} alt="" opacity={0.1} />
      )}
      {(item.permanentShown || item.shown) && item.item !== null && (
        <C.Icon src={items[item.item].icon} alt="" />
      )}
    </C.Container>
  );
};
