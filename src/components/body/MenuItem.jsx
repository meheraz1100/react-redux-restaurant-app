import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "reactstrap";

const MenuItem = (props) => {
  return (
    <div>
        <div>
  <Card inverse style={{padding: 10, margin: 10}}>
    <CardImg
      alt={props.dish.name}
      src={props.dish.image}
      style={{
        height: 270,
        opacity: 0.5
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5" style={{fontSize: 25, fontWeight: 'bold', color: "black"}}>
        {props.dish.name}
      </CardTitle>
    </CardImgOverlay>
  </Card>
</div>
    </div>
  );
};

export default MenuItem;
