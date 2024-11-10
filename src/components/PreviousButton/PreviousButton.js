import { useNavigate, useParams } from "react-router-dom";

function PreviousButton(props) {
  const navigate = useNavigate();
  let { title } = useParams();
  let currentItem = props.arrayToSearch.find(
    (object) => object.title === title
  );
  let prevItem;
  let disabled;
  if (props.arrayToSearch.indexOf(currentItem) === 0) {
    prevItem = "";
    disabled = true;
  } else {
    prevItem =
      props.arrayToSearch[props.arrayToSearch.indexOf(currentItem) - 1].title;
  }

  function handleClick() {
    navigate(`${props.mainPath}${prevItem}`);
  }

  return disabled ? (
    <button disabled onClick={handleClick}>
      &lt;&lt;
    </button>
  ) : (
    <button onClick={handleClick}>&lt;&lt;</button>
  );
}

export default PreviousButton;

/*
INSTRUCTIONS FOR USE
In the component where this is being used, enter the following as props:
-mainPath
-arrayToSearch
e.g. see BlogPost for example:
<PreviousButton mainPath="/blog/" arrayToSearch={blogs} />

note that the url is used to form the title ({ title } = useParams()), 
which is then used to find the right item from the array 
to determine which is currentItem and which is prevItem
so make sure the setup matches that
again, see BlogPost for example
*/
