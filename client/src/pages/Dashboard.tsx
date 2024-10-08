import React, {useState} from "react";
import Add from "../components/Add";
import BudgetForm from "../components/BudgetForm";
const HomePage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="absolute top-0 left-0">
      <Add onClick={() => setShowForm(!showForm)}/>
      </div>
      {showForm && <BudgetForm />}
    </>
  );
};

export default HomePage;
