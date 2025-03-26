import { FC } from "react";
import { BiHeart } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";

interface LikeProps {
  liked: boolean;
  handleClick: () => void;
}
const Like: FC<LikeProps> = ({ handleClick, liked }) => {
  return (
    <div onClick={handleClick} style={{ cursor: "pointer", fontSize: "24px" }}>
      {liked ? <HiHeart color="red" /> : <BiHeart color="gray" />}
    </div>
  );
};

export default Like;
