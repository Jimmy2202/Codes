const ListKnowledge = (props) => {
  return (
    <li
      {...props}
      className="flex text-[25px] text-red-600 flex-row justify-center gap-5 hover:scale-125 transition ease-in-out duration-500"
    ></li>
  );
};

export default ListKnowledge;
