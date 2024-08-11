import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";

type AlertDialogProps = {
  id: string;
  openDialogBtnName: string;
  dialogTitle: string;
  dialogDescription: string;
  cancelBtnName: string;
  continueBtnName: string;
  continue: ((id: string) => void) | (() => void);
};

const AlertDialogComponent = ({ props }: { props: AlertDialogProps }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">{props.openDialogBtnName}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{props.dialogTitle}</AlertDialogTitle>
          <AlertDialogDescription>
            {props.dialogDescription}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{props.cancelBtnName}</AlertDialogCancel>
          <AlertDialogAction onClick={() => props.continue(props?.id)}>
            {props.continueBtnName}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogComponent;
