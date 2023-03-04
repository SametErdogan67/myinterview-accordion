import Questions from "./Questions";
const Interviews = ({ data }) => {
  console.log(data);
  return (
    <div className="row">
      {data.map((item) => (
        <Questions key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Interviews;
