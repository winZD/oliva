import IncomeExpenseContainer from "@/components/IncomeExpenseChartContainer";
import IncomeExpenseTable from "@/components/IncomeExpenseTable";

const Expenses = () => {
  return (
    <div className="grid">
      <IncomeExpenseContainer />
      <div>
        <IncomeExpenseTable />
      </div>
    </div>
  );
};

export default Expenses;
