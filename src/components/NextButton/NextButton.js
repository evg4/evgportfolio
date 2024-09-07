import styles from "./NextButton.module.css";
import { useNavigate, useParams } from "react-router-dom";
import blogs from "../../data/blogs";

function NextButton(props) {
  const navigate = useNavigate();
  let { title } = useParams();
  let currentItem = props.arrayToSearch.find(
    (object) => object.title === title
  );
  let nextItem;
  let disabled;
  if (
    props.arrayToSearch.indexOf(currentItem) + 1 >=
    props.arrayToSearch.length
  ) {
    nextItem = "";
    disabled = true;
  } else {
    nextItem =
      props.arrayToSearch[props.arrayToSearch.indexOf(currentItem) + 1].title;
  }

  function handleClick() {
    navigate(`${props.mainPath}${nextItem}`);
  }

  return disabled ? (
    <button disabled onClick={handleClick}>
      &gt;&gt;
    </button>
  ) : (
    <button onClick={handleClick}>&gt;&gt;</button>
  );
}

export default NextButton;

/*
INSTRUCTIONS FOR USE
In the component where this is being used, enter the following as props:
-mainPath
-arrayToSearch
e.g. see BlogPost for example:
<NextButton mainPath="/blog/" arrayToSearch={blogs} />

note that the url is used to form the title ({ title } = useParams()), 
which is then used to find the right item from the array 
to determine which is currentItem and which is nextItem
so make sure the setup matches that
again, see BlogPost for example
*/
