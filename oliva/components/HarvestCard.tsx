import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

const HarvestCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>TOTAL HarvestCard</CardTitle>
        <CardDescription> HarvestCardData</CardDescription>
      </CardHeader>
      <CardContent>
        <p> HarvestCardContent</p>
      </CardContent>
    </Card>
  );
};

export default HarvestCard;
