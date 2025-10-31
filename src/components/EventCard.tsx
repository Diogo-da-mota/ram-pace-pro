import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  image: string;
  date: string;
  location: string;
  title: string;
  status: "open" | "closed";
}

const EventCard = ({ image, date, location, title, status }: EventCardProps) => {
  return (
    <Card className="overflow-hidden bg-card border-border hover:border-primary transition-colors group">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
          <Calendar className="h-3 w-3" />
          <span className="text-xs font-medium">{date}</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <span className="text-sm text-muted-foreground">{location}</span>
        </div>
        <h3 className="font-bold text-lg text-foreground line-clamp-2">{title}</h3>
        <Button 
          variant={status === "open" ? "success" : "destructive"}
          className="w-full"
        >
          {status === "open" ? "Inscrições abertas" : "Encerrado"}
        </Button>
      </div>
    </Card>
  );
};

export default EventCard;
