import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface SocialCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  gradient: string;
  url: string;
}

const SocialCard = ({ icon, title, subtitle, gradient, url }: SocialCardProps) => {
  return (
    <Card className="overflow-hidden bg-card border-border">
      <div className={`${gradient} p-12 flex items-center justify-center`}>
        <div className="text-white text-5xl">{icon}</div>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-center text-foreground">{title}</h3>
        <p className="text-sm text-center text-muted-foreground">{subtitle}</p>
        <Button
          variant="secondary"
          className="w-full gap-2"
          onClick={() => window.open(url, "_blank")}
        >
          <ExternalLink className="h-4 w-4" />
          Acessar
        </Button>
      </div>
    </Card>
  );
};

export default SocialCard;
