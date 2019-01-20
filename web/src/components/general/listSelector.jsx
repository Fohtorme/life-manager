import React from "react";
import FullRowButton from "./fullRowButton";

const ListSelector = props => {
  const list = props.list.map(item => {
    // The object style is cloned here to remove the read-only property
    let styleAux = Object.assign({}, item.style);
    styleAux.height = `${100 / props.list.length}%`;
    item.style = styleAux;
    return item;
  });
  const { onClickItem } = props;
  return (
    <React.Fragment>
      {list.map(item => (
        <FullRowButton
          key={item.path}
          label={item.label}
          style={item.style}
          onClick={() => onClickItem(item)}
        />
      ))}
    </React.Fragment>
  );
};

export default ListSelector;
