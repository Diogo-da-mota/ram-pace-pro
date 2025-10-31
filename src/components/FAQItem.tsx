import { Button } from "@/components/ui/button";

interface FAQItemProps {
  question: string;
  url: string;
}

const FAQItem = ({ question, url }: FAQItemProps) => {
  return (
    <div className="flex items-center justify-between p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors">
      <p className="text-lg font-medium text-foreground">{question}</p>
      <Button 
        variant="outline"
        size="sm"
        onClick={() => window.open(url, "_blank")}
      >
        Acessar o site
      </Button>
    </div>
  );
};

export default FAQItem;
