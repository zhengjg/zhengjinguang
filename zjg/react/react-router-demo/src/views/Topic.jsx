import { useParams } from "react-router-dom";

function Topic() {
  let arr = [1, 3];
  arr.splice(1, 0, 2)
  console.log(arr);

  let { topicId } = useParams();

  return <h3>Request topic ID:{topicId}</h3>;
}

export default Topic;
