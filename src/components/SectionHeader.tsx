interface SectionHeaderProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ icon, title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-1 h-8 bg-primary rounded-full"></div>
      <div className="flex items-center gap-3">
        {icon && <div className="text-2xl">{icon}</div>}
        <div>
          <h2 className="text-3xl font-bold text-foreground">
            {title} {subtitle && <span className="text-muted-foreground">{subtitle}</span>}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
