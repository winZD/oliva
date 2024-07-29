import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

const FertilizerCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle> FertilizerCard</CardTitle>
        <CardDescription> FertilizerCardData</CardDescription>
      </CardHeader>
      <CardContent>
        <p> FertilizerCardContent</p>
      </CardContent>
    </Card>
  );
};

export default FertilizerCard;
