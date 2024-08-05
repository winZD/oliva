import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
type StatsDataCardProps = {
  title: string;
  value: number;
};
const StatsDataCard = ({ title, value }: StatsDataCardProps) => {
  return (
    <Card className="bg-muted">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="capitalize">{title}</CardTitle>
        <CardDescription className="text-3xl font-extrabold text-primary mt-[0px!important]">
          {value}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default StatsDataCard;
