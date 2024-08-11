import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@radix-ui/react-alert-dialog";

import { AlertDialogHeader, AlertDialogFooter } from "./ui/alert-dialog";
import { Button } from "./ui/button";

type AlertDialogProps = {
  openDialogBtnName: string;
  dialogTitle: string;
  dialogDescription: string;
  cancelBtnName: string;
  continueBtnName: string;
};

const AlertDialogComponent = ({ props }: { props: AlertDialogProps }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">{props.openDialogBtnName}</Button>
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
          <AlertDialogAction>{props.continueBtnName}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogComponent;
