import IncomeExpenseTable from "@/components/IncomeExpenseTable";

const Expenses = () => {
  return (
    <div className="grid">
      <div>big line chart </div>
      <div>
        <IncomeExpenseTable type="expense" />
      </div>
    </div>
  );
};

export default Expenses;
