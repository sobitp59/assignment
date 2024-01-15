import CrossMark from "../assets/crossmark.svg";

const Chip = ({ name, avatar }: { name: string; avatar: string }) => {
  return (
    <>
      <img className="w-10 rounded-full" src={avatar} alt="" /> {name}{" "}
      <img src={CrossMark} alt="cross makr icon" className="w-4" />
    </>
  );
};

export default Chip;
