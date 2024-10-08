// Add.tsx
interface AddProps {
  onClick: () => void;
}

const Add: React.FC<AddProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-background-primary text-text-primary"
    >
      <i className="material-icons text-3xl text-accent-primary">add_circle</i>
    </button>
  );
};

export default Add;
