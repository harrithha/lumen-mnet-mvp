interface RoleSelectorProps {
  selectedRole: string;
  onRoleChange: (role: string) => void;
}

const RoleSelector = ({ selectedRole, onRoleChange }: RoleSelectorProps) => {
  const roles = ["Analyst", "CFO", "Creative"];

  return (
    <div className="flex items-center space-x-2 bg-secondary rounded-lg p-1 w-fit">
      {roles.map((role) => (
        <button
          key={role}
          onClick={() => onRoleChange(role)}
          className={`
            px-4 py-2 rounded-md text-sm font-medium transition-smooth
            ${selectedRole === role 
              ? "bg-card text-foreground shadow-card" 
              : "text-muted-foreground hover:text-foreground"
            }
          `}
        >
          {role}
        </button>
      ))}
    </div>
  );
};

export default RoleSelector;
